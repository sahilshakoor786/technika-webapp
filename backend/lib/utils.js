// get next sequnece number
import Counter from "src/model/counters";

export async function getNextSequence(name) {
  var sequence = await Counter.findOneAndUpdate(
    { _id: name },
    { $inc: { sequence_value: 1 } },
    { new: true }
  );

  return sequence.sequence_value;
}
