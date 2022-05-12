const User = require("./model/user");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ses = require("./lib/ses");
dotenv.config();
const run = async () => {
  const mongooseConnection = await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/tsc-backend"
  );
};

run();
