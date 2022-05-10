const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

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
app.use(bodyParser());
app.use(bodyParser.json());

const run = async () => {
  const mongooseConnection = await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/tsc-backend"
  );

  const port = process.env.PORT || 3007;
  app.listen(port, () =>
    console.log(
      `Node js TSC ADMIN  Backend listening on http://localhost:${port} !`
    )
  );
};

run();
