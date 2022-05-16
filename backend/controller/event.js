const User = require("../model/user");
const Event = require("../model/event");
const EventRegistrationDetail = require("../model/eventRegistrationDetail");
const RegistrationPayment = require("../model/registrationPayment");
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const utils = require("../lib/utils");
const { default: mongoose } = require("mongoose");
const { ObjectId } = require("mongodb");
const ses = require("../lib/ses");

// eventId, eventLeadTSCId , teamMembersTSCIds
exports.register = async (req, res) => {
  try {
    const eventId = req.body.eventId;
    if (!eventId) {
      res.status(400).json({ success: false, message: "Event id not found" });
      return;
    }

    const event = await Event.find({ eventId: eventId });

    if (!event) {
      res.status(400).json({ success: false, message: "Event not found" });
      return;
    }

    const eventLeadTSCId = req.body.eventLeadTSCId;

    if (!eventLeadTSCId) {
      res
        .status(400)
        .json({ success: false, message: "Event lead id not found" });
      return;
    }

    const user = await User.findOne({ tscId: eventLeadTSCId });

    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    if (user.id != req.user.id) {
      res.status(400).json({ success: false, message: "Unauthorized" });
      return;
    }

    const eventRegistrationDetail = await EventRegistrationDetail.findOne({
      eventId: eventId,
      leaderId: user.id,
    });

    if (eventRegistrationDetail) {
      res.status(400).json({
        success: false,
        message: "User already registered for this event",
      });
      return;
    }

    if (!user.isHbtuStudent) {
      const registrationPayment = await RegistrationPayment.findOne({
        userId: user.id,
        paymentStatus: "success",
      });

      if (!registrationPayment) {
        res.status(400).json({
          success: false,
          message: "For non HBTU students, payment is required",
        });
        return;
      }
    }

    // for solo event

    if (event.isSoloEvent) {
      const eventRegistrationDetail = new EventRegistrationDetail({
        eventId: eventId,
        isCompleteRegistration: true,
        isTeamRegistration: false,
        leaderId: eventLead,
        teamMembers: [],
      });

      await eventRegistrationDetail.save();

      const emailBody = `
      <!DOCTYPE html>
      <html lang="en">
        <body>
          <div>
            <p>Hey Tech-Geek,</p>
      
            <p>
              Thank you for registering in ${event.eventName}, the rules and guidelines of the
              competition can be read through our brochure which can be downloaded
              through our website. You can checkout all our other events and
              competitions in our website and register for more! More is better,
              right? Looking forward to seeing you compete in ${event.eventName}!
            </p>
      
            <p>Regards, Team Technika.</p>
          </div>
        </body>
      </html>
      
      
      `;

      await ses.sendEmail(
        `${user.name}<${user.email}>`,
        "Technika | Registration Confirmation",
        emailBody
      );

      res.status(200).json({
        success: true,
        message: "User registered successfully",
      });
    }

    // for team event
    else {
      const teamMembersTSCIds = req.body.teamMembersTSCIds;

      if (!teamMembersTSCIds) {
        res.status(400).json({
          success: false,
          message: "Team members tsc ids not found",
        });
        return;
      }

      const teamMembers = [];

      for (let i = 0; i < teamMembersTSCIds.length; i++) {
        const teamMember = await User.findOne({ tscId: teamMembersTSCIds[i] });

        if (!teamMember) {
          res.status(400).json({
            success: false,
            message: "Team member not found",
          });
          return;
        }

        const check = await EventRegistrationDetail.findOne({
          eventId: eventId,
          teamMembers: teamMember.id,
        });

        if (check) {
          res.status(400).json({
            success: false,
            message: "User already registered for this event",
          });
          return;
        }

        if (!teamMember.isHbtuStudent) {
          const registrationPayment = await RegistrationPayment.findOne({
            userId: teamMember.id,
            paymentStatus: "success",
          });

          if (!registrationPayment) {
            res.status(400).json({
              success: false,
              message: "For non HBTU students, payment is required",
            });
            return;
          }
        }

        teamMembers.push({
          id: teamMember._id,
          email: teamMember.email,
          name: teamMember.name,
          tscId: teamMember.tscId,
        });
      }

      if (teamMembers.length + 1 < event.minTeamSize) {
        res.status(400).json({
          success: false,
          message: "Minimum team size is " + event.minTeamSize,
        });
      }

      if (teamMembers.length + 1 > event.maxTeamSize) {
        res.status(400).json({
          success: false,
          message: "Maximum team size is " + event.maxTeamSize,
        });
      }

      const eventRegistrationDetail = new EventRegistrationDetail({
        eventId: eventId,
        isCompleteRegistration: true,
        isTeamRegistration: true,
        leaderId: user.id,
        teamMembers: teamMembers.map((member) => member.id),
      });

      await eventRegistrationDetail.save();

      const emailBody = `
      <!DOCTYPE html>
      <html lang="en">
        <body>
          <div>
            <p>Hey Tech-Geek,</p>
      
            <p>
              Thank you for registering in ${event.eventName}, the rules and guidelines of the
              competition can be read through our brochure which can be downloaded
              through our website. You can checkout all our other events and
              competitions in our website and register for more! More is better,
              right? Looking forward to seeing you compete in ${event.eventName}!
            </p>
      
            <p>Regards, Team Technika.</p>
          </div>
        </body>
      </html>
      
      
      `;

      await ses.sendEmail(
        `${user.name}<${user.email}>`,
        "Technika | Registration Confirmation",
        emailBody
      );

      teamMembers.forEach(async (member) => {
        await ses.sendEmail(
          `${member.name}<${member.email}>`,
          "Technika | Registration Confirmation",
          emailBody
        );
      });

      res.status(200).json({
        success: true,
        message: "User registered successfully",
      });
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.payment = async (req, res) => {
  const userId = req.user.id;
  const isAccommodation = req.body.isAccommodation || false;

  if (!userId) {
    res.status(400).json({ success: false, message: "User id not found" });
    return;
  }

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).json({ success: false, message: "User not found" });
    return;
  }

  if (user.isHbtuStudent) {
    res.status(200).json({
      success: true,
      message: "User is HBTU student",
    });
  } else {
    const registrationPayment = await RegistrationPayment.findOne({
      userId: userId,
      paymentStatus: "success",
    });

    if (registrationPayment) {
      res.status(400).json({
        success: false,
        message: "User already registered",
      });
      return;
    }

    var instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const amount = isAccommodation ? 200000 : 40000;

    var options = {
      amount: amount,
      currency: "INR",
      receipt: user.email,
    };
    const order = await instance.orders.create(options);

    const registrationPaymentObj = new RegistrationPayment({
      userId: userId,
      paymentStatus: "pending",
      paymentId: order.id,
      paymentAmount: amount,
      paymentDate: new Date(),
      isAccommodation: isAccommodation,
    });

    await registrationPaymentObj.save();

    res.status(200).json({
      success: true,
      message: "Payment request sent",
      result: {
        key: process.env.RAZORPAY_KEY_ID,
        paymentId: order.id,
        paymentAmount: amount,
        currency: "INR",
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          userId: userId,
        },
      },
    });
  }
};

exports.paymentSuccess = async (req, res) => {
  let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature !== req.body.razorpay_signature) {
    res.status(400).json({ success: false, message: "Invalid signature" });
    return;
  }

  const registrationPayment = await RegistrationPayment.findOne({
    paymentId: req.body.razorpay_order_id,
  });

  if (!registrationPayment) {
    res.status(400).json({ success: false, message: "Payment not found" });
    return;
  }

  if (registrationPayment.paymentStatus === "success") {
    res.status(400).json({ success: false, message: "Payment already done" });
    return;
  }

  registrationPayment.paymentStatus = "success";

  await registrationPayment.save();

  // generate tsc id

  const user = await User.findById(registrationPayment.userId);

  if (!user) {
    res.status(400).json({ success: false, message: "User not found" });
    return;
  }

  let nextId = await utils.getNextSequence("userid");
  if (nextId === null) {
    console.error(`Failed to get next user id`);
  }
  let id = "0000" + nextId.toString();

  const tscId = "TSC22" + id.slice(nextId.toString().length - 1);

  user.tscId = tscId;

  await user.save();

  const emailBody = `
  <!DOCTYPE html>
<html lang="en">
  <body>
    <div>
      <p>Hey ${user.email}</p>

      <p>We have received your payment of ${registrationPayment.paymentAmount} towards events registration  .</p>
      <p>
        This is a confirmation receipt for future reference, transaction number
        is  ${registrationPayment.paymentId}. 
      </p>

      <p>Regards, Team Technika</p>
    </div>
  </body>
</html>
`;

  await ses.sendEmail(
    `${user.name}<${user.email}>`,
    "Technika | Registration Payment Confirmation",
    emailBody
  );

  res.status(200).json({
    success: true,
    message: "Payment success",
  });
};

exports.getEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    if (!eventId) {
      res.status(400).json({ success: false, message: "Event id not found" });
      return;
    }

    const event = await Event.findOne({ eventId: eventId });

    if (!event) {
      res.status(400).json({
        success: false,
        message: "Event not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      result: event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.editRegister = async (req, res) => {
  try {
    const id = req.body.id;
    if (!id) {
      res.status(400).json({ success: false, message: "User id not found" });
      return;
    }

    const eventRegistrationDetail = await EventRegistrationDetail.findById(id);
    const event = await Event.findOne({
      eventId: eventRegistrationDetail.eventId,
    });

    if (event.isSoloEvent) {
      res.json({
        success: false,
        message: "Solo event cannot be edited",
      });
      return;
    }

    if (!eventRegistrationDetail) {
      res.status(400).json({ success: false, message: "Event not found" });
      return;
    }

    if (req.user.id != eventRegistrationDetail.leaderId) {
      res.status(400).json({ success: false, message: "Not authorized" });
      return;
    }
    const teamMembersTSCIds = req.body.teamMembersTSCIds;

    const teamMembers = [];

    for (let i = 0; i < teamMembersTSCIds.length; i++) {
      const teamMember = await User.findOne({ tscId: teamMembersTSCIds[i] });

      if (!teamMember) {
        res.status(400).json({
          success: false,
          message: "Team member not found",
        });
        return;
      }

      const check = await EventRegistrationDetail.findOne({
        eventId: eventRegistrationDetail.eventId,
        teamMembers: { $in: [teamMember._id] },
        $not: { _id: eventRegistrationDetail._id },
      });

      if (check) {
        res.status(400).json({
          success: false,
          message: "User already registered for this event",
        });
        return;
      }

      if (!teamMember.isHbtuStudent) {
        const registrationPayment = await RegistrationPayment.findOne({
          userId: teamMember.id,
          paymentStatus: "success",
        });

        if (!registrationPayment) {
          res.status(400).json({
            success: false,
            message: "For non HBTU students, payment is required",
          });
          return;
        }
      }

      teamMembers.push({
        id: teamMember._id,
        email: teamMember.email,
        name: teamMember.name,
        tscId: teamMember.tscId,
      });
    }

    if (teamMembers.length + 1 < event.minTeamSize) {
      res.status(400).json({
        success: false,
        message: "Minimum team size is " + event.minTeamSize,
      });
    }

    if (teamMembers.length + 1 > event.maxTeamSize) {
      res.status(400).json({
        success: false,
        message: "Maximum team size is " + event.maxTeamSize,
      });
    }

    (eventRegistrationDetail.teamMembers = teamMembers.map(
      (member) => member.id
    )),
      await eventRegistrationDetail.save();

    res.status(200).json({
      success: true,
      message: "User registered successfully",
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.listEvent = async (req, res) => {
  try {
    const events = await Event.find({});

    if (!events) {
      res.status(400).json({
        success: false,
        message: "Events not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      result: events,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.checkRegististrationPayment = async (req, res) => {
  try {
    const userId = req.body.userId;

    if (!userId) {
      res.status(400).json({ success: false, message: "User id not found" });
      return;
    }

    const user = await User.findById(userId);

    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    if (user.isHbtuStudent) {
      res.status(200).json({
        success: true,
        message: "User is HBTU student",
      });
      return;
    } else {
      const registrationPayment = await RegistrationPayment.findOne({
        userId: userId,
        paymentStatus: "success",
      });

      if (registrationPayment) {
        res.status(200).json({
          success: true,
          message: "User  payment already done",
        });
        return;
      }

      res.status(200).json({
        success: false,
        message: "User payment not done",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.checkRigistartion = async (req, res) => {
  try {
    const userId = req.body.userId;
    const eventId = req.body.eventId;

    if (!userId || !eventId) {
      res
        .status(400)
        .json({ success: false, message: "User id or event id not found" });
      return;
    }

    const user = await User.findById(userId);

    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    const event = await Event.findOne({ eventId: eventId });

    if (!event) {
      res.status(400).json({ success: false, message: "Event not found" });
      return;
    }

    const registration = await EventRegistrationDetail.findOne({
      $and: [
        { $or: [{ leaderId: userId }, { teamMembers: ObjectId(userId) }] },
        { eventId: eventId },
      ],
    });

    if (registration) {
      res
        .status(200)
        .json({ success: true, message: "User already registered" });
      return;
    }

    res.status(200).json({
      success: false,
      message: "User not registered",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.userEvents = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      res.status(400).json({ success: false, message: "User id not found" });
      return;
    }

    const user = await User.findById(userId);

    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    const events = await Event.find({});

    if (!events) {
      res.status(400).json({ success: false, message: "Events not found" });
      return;
    }

    const eventRegistrations = await EventRegistrationDetail.aggregate([
      {
        $lookup: {
          from: "events",
          localField: "eventId",
          foreignField: "eventId",
          as: "event",
        },
      },
      {
        $lookup: {
          let: {
            userObjId: {
              $toObjectId: "$leaderId",
            },
          },
          from: "users",
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$userObjId"],
                },
              },
            },
          ],
          as: "leader",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "teamMembers",
          foreignField: "_id",
          as: "teamMembersDetails",
        },
      },
      {
        $unwind: {
          path: "$leader",
        },
      },
      {
        $unwind: {
          path: "$event",
        },
      },
      {
        $match: {
          $or: [
            {
              leaderId: userId,
            },
            {
              teamMembers: new ObjectId(userId),
            },
          ],
        },
      },
    ]);

    res.status(200).json({
      success: true,
      result: eventRegistrations,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
