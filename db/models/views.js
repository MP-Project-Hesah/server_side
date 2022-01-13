const mongoose = require("mongoose");

const Views = new mongoose.Schema({
    podcastId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Podcast"
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    date: {
        type: Date,
        required: true,
        default: new Date().toISOString()
    }
});

module.exports = mongoose.model("View", Views);


