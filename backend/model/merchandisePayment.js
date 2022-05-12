const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var merchandisePayment = new Schema(
  {
    paymentId: {
      type: String,
      required: true,
    },

    user: {
      type: Object,
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

    metadata: {
      type: Object,
      required: false,
      default: {},
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
var MerchandisePayment = mongoose.model(
  "MerchandisePayment",
  merchandisePayment
);
module.exports = MerchandisePayment;
