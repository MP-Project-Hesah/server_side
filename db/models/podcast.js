const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  photo: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  category: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  description: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  isDel: {
    type: Boolean,
    default: false,
  },
});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = {
  Podcast,
};
