const express = require("express");
const connectdb = require("./config/connectdb");
const ClientRoutes = require("./routes/clients");
const ProductRoutes = require("./routes/product");
require("dotenv").config();
const app = express();
connectdb();
app.use(express.json());
app.use("/api/client", ClientRoutes);
app.use("/api/product", ProductRoutes);
app.listen(process.env.port, () =>
  console.log(`port is running on port ${process.env.port}`)
);
