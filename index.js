const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
  res.send("Hi! there");
});

app.get("/setname", (req, res) => {
  res.cookie("name", "sammual colt");
  res.cookie("fish", "goldfish");
  res.send("sent you a cookie");
});

app.listen(4000, () => {
  console.log("Serving on port 4000");
});
