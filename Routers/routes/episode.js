const express = require('express')
const { addEpisode,deleteEpisode } = require('./../controllers/episode')
const episodeRouter = express.Router()
const authentication = require("../middleware/authentication");
const audioUploader = require('../../helper/audio.upload');


episodeRouter.post("/episode/:id", authentication, audioUploader.upload.single('audio'), addEpisode);
episodeRouter.delete('/episode/:id', authentication, deleteEpisode);
//podcast 
module.exports = episodeRouter;
