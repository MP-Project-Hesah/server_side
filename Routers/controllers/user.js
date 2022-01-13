const userModel = require("./../../db/models/user");
const roleModel = require('./../../db/models/role');
const storageRef = require('../../helper/fb.storage');
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY;
var jwt = require("jsonwebtoken");



const getUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(403).json(err);
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
  const rolesresult = await new roleModel({ role: 'user' }).save()
  console.log(rolesresult);
  const newUser = new userModel({
    username,
    email: savedEmail,
    password: hashedPassword,
    gender,
    name,
    role: rolesresult._id
  });

  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(403).json(err);
    });
};

const login = (req, res) => {
  const { username, email, password } = req.body;
  const savedEmail = email?.toLowerCase();
  userModel
    .findOne({
      $or: [
        { email: savedEmail },
        { username }
      ]
    }).populate('role').lean().then(async (result) => {
      if (result) {
        if (savedEmail === result.email || username === result.username) {
          const payload = {
            id: result._id,
            name: result.name,
            username: result.usernam,
            email: result.email,
            profession: result.profession,
            bio: result.bio,
            DOB: result["DOB"],
            facebook: result.facebook,
            avatar: result.avatar,
            role: result.role.role,
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
            res.status(200).json({ token, payload });
          } else {
            res.status(400).json("invalid email or password");
          }
        } else {
          res.status(400).json("invalid email or password");
        }
      } else {
        res.status(400).json("email does not exist");
      }
    })
    .catch((err) => {
      res.status(403).json('Unknown error!');
    });
};
const update = async (req, res) => {
  const userId = req.token.id;
  let avatar = ""
  if (req.file) {
    avatar = await uploadAvatar(req.file);
  }
  const { name, profession, DOB, bio, facebook } = req.body;
  if (!name && !profession && !DOB && bio) {
    return res.status(400).json("Something Missing!");
  }
  let body = {
    name,
    profession,
    DOB,
    bio,
    facebook
  }
  if (avatar != "") {
    body.avatar = avatar;
  }
  userModel.findOneAndUpdate({ _id: userId }, { $set: body }, { new: true }).populate('role').then(result => {
    const payload = {
      id: result._id,
      name: result.name,
      username: result.usernam,
      email: result.email,
      profession: result.profession,
      bio: result.bio,
      DOB: result.DOB,
      facebook: result.facebook,
      avatar: result.avatar,
      role: result.role.role || 'user',
    };
    const options = {
      expiresIn: 60 * 60,
    };
    const token = jwt.sign(payload, SECRET_KEY, options);
    res.status(200).json({ message: "Profile updated!", token });
  }).catch(err => {
    res.status(403).json(err);
  })
}
const uploadAvatar = async (file) => {
  const imageBuffer = new Uint8Array(file.buffer);
  file = storageRef.file('users/' + file.originalname);

  await file.save(
    imageBuffer,
    { resumable: false, metadata: { contentType: file.mimetype } },
  );
  file = await file.getSignedUrl({
    action: 'read',
    expires: '12-31-2030'
  })
  return file[0];
}
module.exports = { register, login, getUsers, removeUser, update };
