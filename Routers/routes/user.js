const express = require("express");
const {
  register,
  login,
  getUsers,
  update
} = require("./../controllers/user");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const userRouter = express.Router();
const photoUploader = require('../../helper/photo.upload');

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", authentication, authorization, getUsers);
userRouter.put('/update', authentication, photoUploader.upload.single('avatar') , update)


//userRouter.delete("/users/:id", authentication, authorization, removeUser);
//podcastRouter.delete("/users/:id")


module.exports = userRouter;
