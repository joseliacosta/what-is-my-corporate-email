const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let items = [];

app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.send(newItem);
});

app.get("/items", (req, res) => {
  res.send(items);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
