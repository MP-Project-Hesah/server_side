const mongoose = require("mongoose");
const viewsModel = require("../../db/models/views");

const getTotalPodcastViews = (req, res) => {
    const userId = req.token.id;
    viewsModel.aggregate([
        {
            $project:{
               podcastId:1
            }
        },
        { $lookup: { from: 'podcasts', localField: 'podcastId', foreignField: '_id', as: 'podcastId' } },
        {
            $unwind: "$podcastId"
        },
        {
            $project:{
                _id:0,
                userId:"$podcastId.userId"
            }
        },
        {
            $match: {
                userId: userId
            }
        }
    ]).then(result => {
        res.status(200).json(result.length);
    }).catch(err => {
        res.status(403).json(err);
    })
}
module.exports = {
    getTotalPodcastViews
};