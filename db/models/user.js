const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,

  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role"
  },
  avatar: {
    type: String,
    // required: true,
    // default:""
  },
  bio: {
    type: String,
    // required: true,
    minlength: 6,
    maxlength: 1024,
  },
  isDel: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", user);

