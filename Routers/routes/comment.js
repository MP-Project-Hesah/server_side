const express = require("express");
const {
  createComment,
  deleteComment,
} = require("./../controllers/comment");
const authentication = require("../middleware/authentication");

const commentRouter = express.Router();

commentRouter.post("/comment/:id", authentication, createComment);
// commentRouter.put("/comment/:id", authentication, updateComment);
commentRouter.delete("/comment/:id", authentication, deleteComment);

module.exports = commentRouter;