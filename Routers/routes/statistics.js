const express = require("express");
const { getTotalPodcastViews } = require("../controllers/statistics");

const authentication = require("../middleware/authentication");

const statisticsRouter = express.Router();

statisticsRouter.get("/podcast/total/views", authentication, getTotalPodcastViews);


module.exports = statisticsRouter;