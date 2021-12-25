const router = require("express").Router();

const { comment} = require("../controllers/comment");

router.post("/", comment);

module.exports = router;
