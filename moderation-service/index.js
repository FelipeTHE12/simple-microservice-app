const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.post("/events", (req, res) => {});

app.listen(8000, () => {
  console.log("On port 8000");
});
