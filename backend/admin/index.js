const EventsSchema = require("../model/event");
const UserSchema = require("../model/user");
const MerchandiseProduct = require("../model/merchandiseProduct");
const MerchandisePurchase = require("../model/merchandisePurchase");
const MerchandisePayment = require("../model/merchandisePayment");
const events = require("./resources/events");

const user = require("./resources/user");
const merchandiseProduct = require("./resources/merchandiseProduct");
const merchandisePurchase = require("./resources/merchandisePurchase");
const merchandisePayment = require("./resources/merchandisePayment");
module.exports = {
  rootPath: "/",
  resources: [
    {
      resource: EventsSchema,
      ...events,
    },
    {
      resource: UserSchema,
      ...user,
    },

    {
      resource: MerchandiseProduct,
      ...merchandiseProduct,
    },

    {
      resource: MerchandisePurchase,
      ...merchandisePurchase,
    },

    {
      resource: MerchandisePayment,
      ...merchandisePayment,
    },
  ],
  version: {
    admin: true,
    app: "1.2.3-beta",
  },
  branding: {
    companyName: "Technical Sub-Council , HBTU",
    softwareBrothers: false,
    logo: "",
  },
  pages: {
    HomePage: {
      label: "Home",
      handler: async () => {
        return { some: "output" };
      },
    },
  },
  locale: {
    translations: {
      labels: {
        loginWelcome: "TSC Admin",
      },
      messages: {
        loginWelcome: "Login to TSC Admin Dashboard",
      },
    },
  },
  dashboard: {
    handler: async () => {
      return { some: "output" };
    },
  },
};
