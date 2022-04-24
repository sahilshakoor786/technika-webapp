import mongoose from "mongoose";
var Schema = mongoose.Schema;

var counter = new Schema({
  _id: {
    type: String,
    required: true,
  },

  sequence_value: {
    type: Number,
    default: 0,
  },
});
var Counter = mongoose.model("Counter", counter);
export default Counter;
