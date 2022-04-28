const User = require("../model/user");
const Event = require("../model/evnets");
const EventRegistrationDetail = require("../model/eventRegistrationDetail");
const RegistrationPayment = require("../model/registrationPayment");
const express = require("express");

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
