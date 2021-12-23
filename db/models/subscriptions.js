const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  podcastId: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
  },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = {
  Subscription,
};
