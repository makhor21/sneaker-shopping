const express = require("express");
const contact = express.Router();

contact.get("/", (req, res) => {
  res.render("pages/contact");
});

module.exports = contact;
