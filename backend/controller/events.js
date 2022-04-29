const User = require("../model/user");
const Event = require("../model/evnets");
const EventRegistrationDetail = require("../model/eventRegistrationDetail");
const RegistrationPayment = require("../model/registrationPayment");
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const utils = require("../lib/utils");

// eventId, eventLeadId , teamMembersTSCIds
exports.register = async (req, res) => {
  try {
    const eventId = req.body.eventId;
    if (!eventId) {
      res.status(400).json({ success: false, message: "Event id not found" });
      return;
    }

    const event = await Event.findById(eventId);

    if (!event) {
      res.status(400).json({ success: false, message: "Event not found" });
      return;
    }

    const eventLead = req.body.eventLeadId;

    if (!eventLead) {
      res
        .status(400)
        .json({ success: false, message: "Event lead id not found" });
      return;
    }

    if (eventLead != req.user.id) {
      res.status(400).json({ success: false, message: "Unauthorized" });
      return;
    }

    const eventRegistrationDetail = await EventRegistrationDetail.findOne({
      eventId: eventId,
      leaderId: eventLead,
    });

    if (eventRegistrationDetail) {
      res.status(400).json({
        success: false,
        message: "User already registered for this event",
      });
      return;
    }

    const user = await User.findById(eventLead);

    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    if (!user.isHbtuStudent) {
      const registrationPayment = await RegistrationPayment.findOne({
        userId: eventLead,
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

        teamMembers.push(teamMember._id);
      }

      const eventRegistrationDetail = new EventRegistrationDetail({
        eventId: eventId,
        isCompleteRegistration: true,
        isTeamRegistration: true,
        leaderId: eventLead,
        teamMembers: teamMembers,
      });

      await eventRegistrationDetail.save();

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

    var options = {
      amount: 400,
      currency: "INR",
      receipt: user.email,
    };
    const order = await instance.orders.create(options);

    const registrationPaymentObj = new RegistrationPayment({
      userId: userId,
      paymentStatus: "pending",
      paymentId: order.id,
      paymentAmount: 400,
      paymentDate: new Date(),
    });

    await registrationPaymentObj.save();

    res.status(200).json({
      success: true,
      message: "Payment request sent",
      result: {
        paymentId: order.id,
        paymentAmount: 400,
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

    const event = await Event.findById(eventId);

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

exports.checkRegister = async (req, res) => {
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
    }

    const registrationPayment = await RegistrationPayment.findOne({
      userId: userId,
      paymentStatus: "success",
    });

    if (registrationPayment) {
      res.status(200).json({
        success: true,
        message: "User  registered",
      });
      return;
    }

    res.status(400).json({
      success: false,
      message: "User not registered",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};