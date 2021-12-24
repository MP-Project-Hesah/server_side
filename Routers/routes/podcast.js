const router = require("express").Router();
const { createPodcast, getAllPodcasts, getOnePodcast } = require("../controllers/podcast");

const auth = require("../middleware/auth");

router.get("/search/all", auth, searchPodcast);
router.get("/search/category/:category", auth, searchPodcastByCategory);
router.get("/", auth, getAllPodcasts);
router.get("/:id", auth, getOnePodcast);
router.post("/", auth, createPodcast);
router.post("/episode", auth, newEpisode);

module.exports = router;