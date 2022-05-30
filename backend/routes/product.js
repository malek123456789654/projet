const {
  AddProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controlers/productcontrolers");

const express = require("express");
const ProductRoutes = express.Router();

ProductRoutes.post("/", AddProduct);
ProductRoutes.get("/:id", getProduct);
ProductRoutes.put("/:id", updateProduct);
ProductRoutes.delete("/:id", deleteProduct);

module.exports = ProductRoutes;
