const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/product.controller.js");

router.get("/", controller.product);

module.exports = router;
