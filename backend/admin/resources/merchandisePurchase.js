const display = require("./display");
const sort = require("./sort");
const mongoose = { name: "TSC Database" };

const MerchandisePayment = require("../../model/merchandisePayment");

module.exports = {
  options: {
    parent: mongoose,
    ...sort,
    properties: {
      _id: {
        isVisible: {
          show: true,
          list: false,
          edit: false,
          filter: false,
        },
      },
      createdBy: {
        isVisible: { show: true, list: true, edit: false, filter: true },
      },
    },

    listProperties: ["name", "email", "token", "isPaid", "isComplete"],

    actions: {
      new: {
        showInDrawer: true,
      },
      edit: {
        showInDrawer: true,
      },

      show: {
        showInDrawer: true,
      },
    },
  },
};
