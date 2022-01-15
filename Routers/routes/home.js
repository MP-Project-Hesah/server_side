const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ success: true, info: "Wellcome to Podify App" });
});
module.exports = router;