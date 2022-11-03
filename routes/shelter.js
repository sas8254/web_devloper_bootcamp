const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All shelters");
});

router.post("/", (req, res) => {
  res.send("creating shelters");
});

router.get("/:id", (req, res) => {
  res.send("Vieving one shelters");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing shelters");
});

module.exports = router;
