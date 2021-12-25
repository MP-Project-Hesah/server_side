const _ = require("lodash");
const mongoose = require("mongoose");
const { Podcast, validatePodcast } = require("./../../db/models/podcast");
const { Comment, validateComment } = require("./../../db/models/comment");
const { User } = require("./../../db/models/user");
const { v4: uuidv4 } = require("uuid");


module.exports = {
  // Comment controller
  comment: async (req, res) => {
    //   Validate req body
    const { error } = validateComment(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    //validate userId
    if (!mongoose.Types.ObjectId.isValid(req.body.userId))
      return res
        .status(400)
        .json({ success: false, message: "Invalid user id" });

    //validate podcastId
    if (!mongoose.Types.ObjectId.isValid(req.body.podcastId))
      return res
        .status(400)
        .json({ success: false, message: "Invalid podcast id" });

    //check if user exists
    const user = await User.findById(req.body.userId);
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });

    // Check if podcast exists
    const podcast = await Podcast.findById(req.body.podcastId);
    if (!podcast)
      return res
        .status(400)
        .json({ success: false, message: "Podcast does not exist" });

    let comment = new Comment({
      ..._.pick(req.body, ["userId", "podcastId", "desc", "date"]),
    });

    await comment.save();

    res.send({
      success: true,
      message: "Comment successfull",
    });
  },
};
