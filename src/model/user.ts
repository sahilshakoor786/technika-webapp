import mongoose from "mongoose";
var Schema = mongoose.Schema;

var user = new Schema({
  tscId: {
    type: String,
    required: true,
  },

  googleId: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },

  isHbtuStudent: {
    type: Boolean,
    required: true,
    default: true,
  },

  isTSCTeamMember: {
    type: Boolean,
    required: true,
    default: false,
  },

  isTSCAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  college: {
    type: String,
    default: "Harcourt Butler University , Kanpur",
  },

  city: {
    type: String,
    required: false,
    default: "Kanpur",
  },

  phone: {
    type: String,
    default: "",
  },

  picture: {
    type: String,
    default: "",
  },

  batch: {
    type: String,
    default: "",
  },

  year: {
    type: String,
    default: "",
  },

  branch: {
    type: String,
    default: "",
  },
});

mongoose.models = {};

var User = mongoose.model("User", user);
export default User;
