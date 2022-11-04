const express = require("express");
const app = express();
const session = require("express-session");
app.use(
  session({
    secret: "thisisnotagoodsecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`);
});

app.listen(4000, () => {
  console.log("Serving on port 4000");
});
