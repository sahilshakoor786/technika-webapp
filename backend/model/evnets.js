const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var events = new Schema({
  eventId: {
    type: String,
    required: true,
  },

  eventName: {
    type: String,
    required: true,
  },

  eventDescription: {
    type: String,
    required: true,
  },

  eventDate: {
    type: String,
    required: true,
  },

  eventTime: {
    type: String,
    required: true,
  },

  eventVenue: {
    type: String,
    required: true,
  },

  isSoloEvent: {
    type: Boolean,
    required: true,
    default: false,
  },

  minTeamSize: {
    type: Number,
    required: false,
    default: 1,
  },

  maxTeamSize: {
    type: Number,
    required: false,
    default: 1,
  },
});
var Event = mongoose.model("Event", events);
module.exports = Event;
