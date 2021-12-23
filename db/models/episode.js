const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  podcaseId: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  title: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  date: {
    type: Date,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  isDel: {
    type: Boolean,
    default: false,
  },
});

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = {
  Episode,
};
