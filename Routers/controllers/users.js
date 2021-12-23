const Joi = require("joi");
const _ = require("lodash");
const { dirname } = require("path");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const { Profile } = require("../models/profile");
const { User } = require("../models/user");

module.exports = {
  fetchMe: async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    res.send({
      success: true,
      user: _.pick(user, ["_id", "name", "email", "gender", "username"]),
    });
  },
  updateProfile: async (req, res) => {
    try {
      const { error } = validateProfile(req.body);
      if (error)
        return res
          .status(400)
          .send({ success: false, message: error.details[0].message });

      if (!mongoose.Types.ObjectId.isValid(req.body.userId))
        return res
          .status(400)
          .json({ success: false, message: "Invalid user id" });

      const user = await User.findById(req.body.userId);

      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "User does not exist" });

      if (!req.body.avatar && req.files === null) {
        return res
          .status(400)
          .json({ success: false, message: "No avatar is selected" });
      }

      let avatar = "";

      if (req.body.avatar) {
        avatar = req.body.avatar;
      } else {
        const avatarFile = req.files.avatar;

        let avatar_id = uuidv4();
        const appDir = dirname(require.main.filename);
        avatarFile.mv(
          `${appDir}/public/uploads/${avatar_id + "_" + avatarFile.name}`
        );

        avatar = `${avatar_id + "_" + avatarFile.name}`;
      }

      let profile = await Profile.findOne({ userId: req.body.userId });

      if (!profile) {
        profile = new Profile({
          ..._.pick(req.body, ["userId", "bio"]),
          avatar,
        });

        await profile.save();
      } else {
        profile = await Profile.findOneAndUpdate(
          { userId: req.body.userId },
          {
            ..._.pick(req.body, ["userId", "bio"]),
            avatar,
          },
          { upsert: true }
        );
      }
      res.send({
        success: true,
        profile: _.pick(profile, ["_id", "userId", "bio", "avatar"]),
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

function validateProfile(profile) {
  const schema = Joi.object().keys({
    userId: Joi.string().min(5).max(50).required(),
    bio: Joi.string().min(4).max(1024).required(),
    avatar: Joi.string().min(4).max(1024),
  });
  return schema.validate(profile);
}
