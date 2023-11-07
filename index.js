import express from "express";
import path from "path";

var app = express();

app.use(express.static(path.resolve()));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("index.html"));
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
