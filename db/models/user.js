const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
  gender: {
    type: String,
    required: true,
   
  },

  role:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Role"
  },
  avatar: {
    type: String,
    // required: true,
    minlength: 6,
    maxlength: 500,
    // default:""
  },
  bio: {
    type: String,
    // required: true,
    minlength: 6,
    maxlength: 1024,
  },
});

module.exports = mongoose.model("User", user);