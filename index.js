const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/private-limited", (req, res) => {
  res.render("private-limited");
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Server running on port 8000!");
});
