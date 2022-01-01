const express = require("express");
const {
  register,
  login,
  getUsers
} = require("./../controllers/user");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const userRouter = express.Router();


userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", authentication, authorization, getUsers);



//userRouter.delete("/users/:id", authentication, authorization, removeUser);
//podcastRouter.delete("/users/:id")

 
module.exports = userRouter;
