const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const app = express();
const authController = require("./controller/auth");

app.use(express.json());
app.use(express.urlencoded());

const { body, validationResult } = require("express-validator");

app.get("auth/google/url", authController.getUrl);
app.get("auth/google/callback", authController.googleCallback);

const run = async () => {
  const mongooseConnection = await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/tsc-backend"
  );

  const port = process.env.PORT || 3006;
  app.listen(port, () =>
    console.log(`Node js Backend listening on http://localhost:${port} !`)
  );
};

run();
