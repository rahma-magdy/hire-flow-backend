const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Got all users" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "Got user" });
});

router.put("/:id", (req, res) => {
  res.json({ message: "Updated user" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Deleted user" });
});

module.exports = router;
