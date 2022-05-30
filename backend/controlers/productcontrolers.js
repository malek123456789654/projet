const productSchema = require("../models/products");
exports.AddProduct = async (req, res) => {
  const { name, prix } = req.body;
  try {
    const product = new productSchema({ ...req.body });
    const found = await productSchema.findOne({ name });

    await product.save();
    const token = jwt.sign(payload, process.env.secretOrKey);
    res.status(200).send({ msg: "product is added", product, token });
  } catch (error) {
    res.status(500).send("could not add product");
  }
  if (prix < 0) {
    res.status(400);
    return res.send("Please add price");
  }
};

exports.getProduct = async (req, res) => {
  try {
    const products = await productSchema.find();

    res.status(200).send({ msg: "product is found" });
  } catch (error) {
    res.status(500).send({ msg: "could not get product" });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const products = await productSchema.findByIdAndDelete(req.params.id);

    res.status(200).send({ msg: "product is deleted" });
  } catch (error) {
    res.status(500).send({ msg: "could not delete product" });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const products = await productSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).send({ msg: "product is updated" });
  } catch (error) {
    res.status(500).send({ msg: "could not updat product" });
  }
};
