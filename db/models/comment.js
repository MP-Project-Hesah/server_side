const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  date: {
    type: Date,
    required: true,
  },
  isDel: {
    type: Boolean,
    default: false
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Comment,
};
