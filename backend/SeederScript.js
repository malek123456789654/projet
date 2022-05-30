require("dotenv").config();
const productsData = require("./Data/product");
const connectDB = require("./config/db");
const product = require("/models/product");
connectDB();
const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data import success");
    process.exit();
  } catch (error) {
    console.error("error with data import");
    process.exit(1);
  }
};
importData();
