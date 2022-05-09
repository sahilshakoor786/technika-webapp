const display = require("./display");
const sort = require("./sort");
const mongoose = { name: "TSC Database" };

const evnets = require("../../model/evnets");

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

    actions: {
      new: {
        showInDrawer: true,
        isAccessible: false,
      },
      edit: {
        showInDrawer: true,
        isAccessible: false,
      },

      show: {
        showInDrawer: true,
      },
      bulkDelete: {
        isAccessible: true,
      },

      delete: {
        isAccessible: true,
      },
    },
  },
};
