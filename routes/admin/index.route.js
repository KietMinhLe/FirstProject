const system = require("../../config/system.js");

const dashboardRoute = require("./dashboard.route.js");

const productsRoute = require("./products.route.js");

module.exports = (app) => {
  const PATH_ADMIN = system.prefixAdmin;

  app.use(PATH_ADMIN + "/dashboard", dashboardRoute);

  app.use(PATH_ADMIN + "/products", productsRoute);
};
