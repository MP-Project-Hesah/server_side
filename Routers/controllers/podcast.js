const _ = require("lodash");
const mongoose = require("mongoose");
const { Podcast, validatePodcast } = require("./../../db/models/podcast");
const { User } = require("./../../db/models/user");
const { dirname } = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  // Create podcast controller
  createPodcast: async (req, res) => {
    //   Validate req body
    const { error } = validatePodcast(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    //validate userId
    if (!mongoose.Types.ObjectId.isValid(req.body.userId))
      return res
        .status(400)
        .json({ success: false, message: "Invalid user id" });

    const user = await User.findById(req.body.userId);
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });

    if (!req.body.photo && req.files === null) {
      return res
        .status(400)
        .json({ success: false, message: "No podcast photo is selected" });
    }

    let photo = "";

    if (req.body.photo) {
      photo = req.body.photo;
    } else {
      const photoFile = req.files.photo;

      let photo_id = uuidv4();
      const appDir = dirname(require.main.filename);
      photoFile.mv(
        `${appDir}/public/uploads/${photo_id + "_" + photoFile.name}`
      );

      photo = `${photo_id + "_" + photoFile.name}`;
    }

    let podcast = new Podcast({
      ..._.pick(req.body, ["name", "userId", "category", "description"]),
      photo,
    });

    await podcast.save();

    res.send({
      success: true,
      podcast: _.pick(podcast, [
        "_id",
        "name",
        "userId",
        "category",
        "description",
        "photo",
      ]),
    });
  },
  //   Get All podcasts controller
  getAllPodcasts: async (req, res) => {
    try {
      let podcasts = await Podcast.find().select("-__v");
      res.send({ success: true, podcasts });
    } catch (error) {
      console.log(error.message);
    }
  },
  //   Get one podcast controller
  getOnePodcast: async (req, res) => {
    let { id } = req.params;
    try {

      //validate id
    if (!mongoose.Types.ObjectId.isValid(id))
    return res
      .status(400)
      .json({ success: false, message: "Invalid podcast id" });

      const podcast = await Podcast.findById(id).select("-__v");;
      if (!podcast)
        return res
          .status(400)
          .json({ success: false, message: "Podcast does not exist" });

      res.send({ success: true, podcast });
    } catch (error) {
      console.log(error.message);
    }
  },
};
