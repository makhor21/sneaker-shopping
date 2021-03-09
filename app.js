const express = require("express");
const app = express();
const path = require("path");
const about = require("./routes/about");
const contact = require("./routes/contact");
const home = require("./routes/home");
const product = require("./routes/product");

app.use(express.static(path.join(__dirname, "./public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.use("/home", home);

app.use("/about", about);

app.use("/contact", contact);

app.use("/product", product);

app.listen(8080, () => {
  console.log("Server started at localhost:8080 ...");
});
