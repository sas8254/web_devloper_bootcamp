const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Dogs");
});

router.post("/", (req, res) => {
  res.send("creating Dogs");
});

router.get("/:id", (req, res) => {
  res.send("Vieving one Dog");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing Dog");
});

module.exports = router;
