const express = require("express");
const product = express.Router();
const path = require("path");
const fs = require("fs");

product.get("/:id", (req, res) => {
  fs.readFile(path.join(__dirname, "../tools/db.json"), "utf8", (err, data) => {
    if (err) res.send(400).send("something went wrong...");
    data = JSON.parse(data);

    let product = data.find((x) => x.id == req.params.id);
    if (!product) return res.status(404).send("Product not found!!!");
    res.render("pages/product", { product });
  });
});

module.exports = product;
