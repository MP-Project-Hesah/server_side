const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");



const getUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};



const removeUser = (req, res) => {
  const { id } = req.params;
  userModel
    .findByIdAndUpdate(id, { $set: { isDel: true } })
    .then((result) => {
      if (result) {
        res.status(200).json("user removed");
      } else {
        res.status(200).json("user does not exist");
      }
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

const register = async (req, res) => {
  const { username, email, password, gender, name } = req.body;

  const Salt = Number(process.env.SALT);
  const savedEmail = email.toLowerCase();
  const hashedPassword = await bcrypt.hash(password, Salt);
  const newUser = new userModel({
    username,
    email: savedEmail,
    password: hashedPassword,
    gender,
    name
  });

  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

const login = (req, res) => {
  const { username, email, password } = req.body;
  const SECRET_KEY = process.env.SECRET_KEY;
  const savedEmail = email?.toLowerCase();
  userModel
    .findOne({
      $or: [
        { email: savedEmail },
        { username }
      ]
    }).then(async (result) => {
      if (result) {
        console.log(result);
        if (savedEmail === result.email || username === result.username) {
          const payload = {
            id: result._id,
            role: result.role,
          };
          const options = {
            expiresIn: 60 * 60,
          };
          const token = jwt.sign(payload, SECRET_KEY, options);
          const unhashPassword = await bcrypt.compare(
            password,
            result.password
          );
          if (unhashPassword) {
            console.log("here");
            res.status(200).json({ result, token });
          } else {
            res.status(200).json("invalid email or password");
          }
        } else {
          res.status(200).json("invalid email or password");
        }
      } else {
        res.status(200).json("email does not exist");
      }
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};
module.exports = { register, login, getUsers, removeUser };

