const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const authController = require("./controller/auth");
const userController = require("./controller/user");
const eventController = require("./controller/events");
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

app.post(
  "/event/register",
  middleware.authMiddleware,
  eventController.register
);

app.get("/event/:eventId", eventController.getEvent);
app.get("/event", eventController.listEvent);
app.post("/event/register/check", eventController.checkRegister);
// app.get("/events/me", eventController.checkRegister);

app.get("/user/:tscId", userController.getUserByTscId);

app.post(
  "/event/register/payment/create",
  middleware.authMiddleware,
  eventController.payment
);

app.post(
  "/event/register/payment/verify",
  middleware.authMiddleware,
  eventController.paymentSuccess
);

const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const adminOptions = require("./admin");

AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS(adminOptions);

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const adminEmail = process.env.ADMIN_EMAIL || "admintsc@technika.org.in";
    const adminPassword = process.env.ADMIN_PASSWORD || "adminPassword";
    if (email === adminEmail && password === adminPassword) {
      return {
        email: "admin@technika.org.in",
        name: "Admnin",
        id: "id",
        roles: ["admin"],
      };
    }
    return false;
  },
  cookiePassword: process.env.cookiePassword || "cookiePassword",
});

app.use(adminJs.options.rootPath, router);
// app.use(bodyParser());
// app.use(bodyParser.json());
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
