const express = require("express");
const home = express.Router();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

home.use(bodyParser.urlencoded({ extended: false }));

home.get("/", (req, res) => {
  let product = [];
  let newPro = [];
  fs.readFile(path.join(__dirname, "../tools/db.json"), "utf8", (err, data) => {
    if (err) res.send("something went wrong...");
    product = JSON.parse(data);
    if (req.query.search) {
      for (let index = 0; index < product.length; index++) {
        for (const key in product[index]) {
          if (product[index][key].includes(req.query.search)) {
            newPro.push(product[index]);
          }
        }
      }
      product = newPro;
      return res.render("pages/home", { product });
    } else {
      return res.render("pages/home", { product });
    }
  });
});

module.exports = home;
