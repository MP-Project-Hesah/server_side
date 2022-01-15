const mongoose = require("mongoose");
const episodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: new Date().toISOString()
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

