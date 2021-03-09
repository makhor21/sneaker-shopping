const express = require("express");
const about = express.Router();

about.get("/", (req, res) => {
  res.render("pages/about");
});

module.exports = about;
