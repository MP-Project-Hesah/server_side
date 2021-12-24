const router = require("express").Router();
const { unSubscribe, subscribe } = require("../controllers/subscriptions");

const auth = require("../middleware/auth");

router.post("/subscribe", auth, subscribe);
router.post("/unsubscribe", auth, unSubscribe);

module.exports = router;