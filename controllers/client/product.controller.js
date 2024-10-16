const Product = require("../../models/product.model");

// localhost/products
module.exports.product = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  });

  const newProducts = products.map((item) => {
    item.priceNew = (
      (item.price * (100 - item.discountPercentage)) /
      100
    ).toFixed();
    return item;
  });

  console.log(newProducts);
  
  res.render("./client/pages/products/product.client.pug", {
    products: newProducts,
  });
};
