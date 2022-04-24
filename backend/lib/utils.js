// get next sequnece number
const Counter = require("../model/counters");

exports.getNextSequence = async (name) => {
  var sequence = await Counter.findOneAndUpdate(
    { _id: name },
    { $inc: { sequence_value: 1 } },
    { new: true }
  );

  return sequence.sequence_value;
};
