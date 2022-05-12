const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var merchandiseProduct = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
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
var MerchandiseProduct = mongoose.model(
  "MerchandiseProduct",
  merchandiseProduct
);
module.exports = MerchandiseProduct;
