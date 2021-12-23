const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("./../../db/models/user");

module.exports = {
  login: async (req, res) => {
    try {
      const { error } = validateLogin(req.body);

      if (error)
        return res
          .status(400)
          .send({ success: false, message: error.details[0].message });
      let user = await User.findOne({ email: req.body.email });

      if (!user)
        return res
          .status(400)
          .send({ success: false, message: "Invalid email or password..." });

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res
          .status(400)
          .send({ success: false, message: "Invalid email or password..." });

      res.send({
        success: true,
        user: _.pick(user, ["_id", "name", "email", "isAdmin", "avatar"]),
        token: user.generateAuthToken(),
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  register: async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error)
        return res
          .status(400)
          .send({ success: false, message: error.details[0].message });

      let user = await User.findOne({ email: req.body.email });
      if (user)
        return res
          .status(400)
          .send({ success: false, message: "user already registered..." });

      user = new User(_.pick(req.body, ["name", "email", "password", "username", "gender"]));

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();

      res.send({
        success: true,
        user: _.pick(user, ["_id", "name", "email", "isAdmin", "avatar", , "username", "gender"]),
        token: user.generateAuthToken(),
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

function validateLogin(req) {
  const schema = Joi.object().keys({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(req);
}
