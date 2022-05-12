const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var registrationPayment = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    paymentId: {
      type: String,
      required: true,
    },

    paymentStatus: {
      // "success", "pending", "failed"
      type: String,
      required: true,
    },

    paymentAmount: {
      type: Number,
      required: true,
    },

    paymentDate: {
      type: Date,
    },

    paymentMode: {
      type: String,
    },

    isAccommodation: {
      type: Boolean,
      default: false,
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
var RegistrationPayment = mongoose.model(
  "RegistrationPayment",
  registrationPayment
);
module.exports = RegistrationPayment;
