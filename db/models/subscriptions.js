const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  podcast: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Podcast"
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User"
  },
  isDel: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    required: true,
    default: new Date().toISOString()
  }
});

module.exports = mongoose.model("Subscription", subscriptionSchema);


