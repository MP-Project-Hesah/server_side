const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  date: {
    type: Date,
    required: true,
    default: new Date().toISOString()
  },
  isDel: {
    type: Boolean,
    default: false
  },
  userId: {
    type: String,
    required: true,
    ref: "User"
  },
  podcastId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Podcast"
  }
});

module.exports = mongoose.model("Comment", commentSchema);

