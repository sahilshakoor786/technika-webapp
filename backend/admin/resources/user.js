const display = require("./display");
const sort = require("./sort");
const mongoose = { name: "TSC Database" };

const User = require("../../model/user");
const AdminJS = require("adminjs");
// const Filter = require("adminjs/src/backend/utils/filter/filter");

// const Component = require("adminjs/src/frontend/components/actions/list");

module.exports = {
  options: {
    parent: mongoose,
    ...sort,

    listProperties: ["tscId", "name", "email", "college", "branch", "batch"],

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
        isAccessible: false,
      },

      delete: {
        isAccessible: false,
      },

      nonHbtuStudents: {
        actionType: "resource",
        handler: async (request, response, context) => {
          const { query } = request;
          const {
            sortBy,
            direction,
            filters = {},
          } = flat.unflatten(query || {});
          const { resource } = context;
          let { page, perPage } = flat.unflatten(query || {});
          if (perPage) {
            perPage = +perPage > PER_PAGE_LIMIT ? PER_PAGE_LIMIT : +perPage;
          } else {
            perPage = 10; // default
          }
          page = Number(page) || 1;
          const listProperties = resource.decorate().getListProperties();
          const firstProperty = listProperties.find((p) => p.isSortable());
          let sort;
          if (firstProperty) {
            sort = sortSetter(
              { sortBy, direction },
              firstProperty.name(),
              resource.decorate().options
            );
          }

          filters.college = {};
          // const filter = await new Filter(filters, resource).populate();
          const records = await resource.find(
            {
              college: {
                $nin: [
                  "Harcourt Butler University , Kanpur",
                  "HBTU",
                  "",
                  "hbtu",
                ],
              },
            },
            {
              limit: perPage,
              offset: (page - 1) * perPage,
              sort,
            }
          );
          const populatedRecords = await populator(records);
          // eslint-disable-next-line no-param-reassign
          context.records = populatedRecords;
          const total = await resource.count({
            college: {
              $nin: ["Harcourt Butler University , Kanpur", "HBTU", "", "hbtu"],
            },
          });
          return {
            meta: {
              total,
              perPage,
              page,
              direction: sort?.direction,
              sortBy: sort?.sortBy,
            },
            records: populatedRecords.map((r) =>
              r.toJSON(context.currentAdmin)
            ),
          };
        },

        // component: AdminJS.bundle(
        //   "../../node_modules/adminjs/src/frontend/components/actions/list.tsx"
        // ),
      },
    },
  },
};
