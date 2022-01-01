const mongoose = require("mongoose");
const episodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // minlength: 6,
    // maxlength: 1024,
  },
  title: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024
  },
  date: {
    type: Date,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  url: {
    type: String,
  },
  isDel: {
    type: Boolean,
    default: false,
  },
  podcast: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Podcast"
  }
});

module.exports = mongoose.model("Episode", episodeSchema);
