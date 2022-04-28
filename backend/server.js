const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
const authController = require("./controller/auth");
const userController = require("./controller/user");
const middleware = require("./middleware/auth");
const multer = require("multer");
const upload = multer();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const { body, validationResult } = require("express-validator");

app.get("/auth/google/url", authController.getUrl);
app.post("/auth/google/callback", authController.googleCallback);

app.get("/me", middleware.authMiddleware, userController.me);
app.put("/profile/:userId", middleware.authMiddleware, userController.update);
app.post("/profile/upload/:userId", upload.any(), userController.upload);

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
