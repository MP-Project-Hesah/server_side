const express = require('express')
const { getPodcast, getYourPodcast, createPodcast, updatePodCast, deletePodcast, getPodCastById, AdminGetPodcast, podcastView } = require('./../controllers/podcast')
const postRouter = express.Router()
const authentication = require("../middleware/authentication");
const authorizations = require('../middleware/authorization');
const photoUploader = require('../../helper/photo.upload');
// postRouter.get("/podcast",authentication, getPodcast);

//podcast is name 
//podcast is description 
// postRouter.get("/podcast/admin",authentication);

postRouter.post('/admin/podcast/all/list',authentication, authorizations,  AdminGetPodcast);
postRouter.get('/podcast/all/list', authentication, getPodcast);
postRouter.get('/podcast/list', authentication, getYourPodcast);
postRouter.get('/podcast/:id', authentication, getPodCastById);
postRouter.post("/podcast", authentication, photoUploader.upload.single('photo'), createPodcast);
postRouter.put("/podcast/:id", authentication, photoUploader.upload.single('photo'), updatePodCast);
postRouter.delete('/podcast/:id', authentication, deletePodcast);

postRouter.get('/podcast/view/:id', authentication, podcastView)

module.exports = postRouter;
