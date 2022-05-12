const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var merchandisePurchase = new Schema(
  {
    merchandiseProductId: {
      type: String,
      required: true,
    },

    user: {
      type: Object,
      required: true,
    },

    merchandisePaymentId: {
      type: String,
      required: true,
    },

    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },

    token: {
      type: String,
      required: false,
      default: "",
    },

    isComplete: {
      type: Boolean,
      required: true,
      default: false,
    },

    completedDate: {
      type: Date,
      required: false,
      default: null,
    },

    completedBy: {
      type: String,
      required: false,
      default: null,
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
var MerchandisePurchase = mongoose.model(
  "MerchandisePurchase",
  merchandisePurchase
);
module.exports = MerchandisePurchase;
