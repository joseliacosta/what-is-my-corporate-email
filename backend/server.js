const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller/index");

const app = express();
app.use(bodyParser.json());

app.post("/email", (req, res) => {
  const newEmail = req.body;

  res.send(controller.createEmail(newEmail));
});

app.get("/domains", (req, res) => {
  res.send(controller.getDomains());
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
