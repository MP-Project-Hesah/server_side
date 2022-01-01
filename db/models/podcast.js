const mongoose = require("mongoose");
//podcast model 
const podcastSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    ref: "User"
  },
  episode: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Episode"
  }],
  comment: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  photo: {
    type: String,
    // required: false,
  },
  category: {
    type: String,
    required: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
    lowercase: true
  },
  isDel: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Podcast", podcastSchema);