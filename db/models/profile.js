const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
  },
  avatar: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
  },
  bio: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = {
  Profile,
};
