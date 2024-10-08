const homeRouter = require("./home.route.js");
const productRouter = require("./product.route.js");

module.exports = (app) => {
  app.use("/", homeRouter);

  app.use("/products", productRouter);
};
