const EventsSchema = require("../model/evnets");
const UserSchema = require("../model/user");
const events = require("./resources/events");
const user = require("./resources/user");
module.exports = {
  rootPath: "/admin",
  resources: [
    {
      resource: EventsSchema,
      ...events,
    },
    {
      resource: UserSchema,
      ...user,
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
