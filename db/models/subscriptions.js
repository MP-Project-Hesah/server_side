const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  podcast: {
    type: String,
    required: true,
    ref: "Podcast" 
  },
  userId: {
    type: String,
    required: true,
    ref: "User" 
  },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);


