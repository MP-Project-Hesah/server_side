const router = require("express").Router();
const { fetchMe, updateProfile } = require("../controllers/users");

const auth = require("../middleware/auth");

router.get("/me", auth, fetchMe);
router.post("/update-profile", auth, updateProfile);

module.exports = router;