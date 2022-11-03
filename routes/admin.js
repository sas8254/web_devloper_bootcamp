const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.send("Sorry not an admin");
  }
});

router.get("/topsecret", (req, res) => {
  res.send("This is top secret");
});

router.get("/deleteEverything", (req, res) => {
  res.send("OK, delete it all");
});

module.exports = router;
