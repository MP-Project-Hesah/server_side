const router = require("express").Router();
const { createPodcast, getAllPodcasts, getOnePodcast } = require("../controllers/podcast");

const auth = require("../middleware/auth");

router.get("/", auth, getAllPodcasts);
router.get("/:id", auth, getOnePodcast);
router.post("/", auth, createPodcast);

module.exports = router;