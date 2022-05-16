const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventRegistrationDetail = new Schema(
  {
    eventId: {
      type: String,
      required: true,
    },

    isCompleteRegistration: {
      type: Boolean,
      required: true,
      default: false,
    },

    isTeamRegistration: {
      type: Boolean,
      required: true,
      default: false,
    },

    leaderId: {
      // This is the userId of the event lead
      type: String,
      required: false,
      default: "",
    },

    teamMembers: {
      type: Array,
      required: false,
      default: [],
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        return ret;
      },
    },
  }
);
var EventRegistrationDetail = mongoose.model(
  "EventRegistrationDetail",
  eventRegistrationDetail
);
module.exports = EventRegistrationDetail;
