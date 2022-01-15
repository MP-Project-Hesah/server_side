const commentModel = require("../../db/models/comment");
const postModel = require('../../db/models/podcast');
/////Comment controller

const createComment = (req, res) => {
  const { id } = req.params;

  const { comment } = req.body;
  if (!comment) {
    return res.status(400).json("Please add comment!");
  }
  const newComment = new commentModel({
    comment,
    userId: req.token.id,
    podcastId: id
  });
  newComment
    .save()
    .then((result) => {
      postModel.findByIdAndUpdate(id, { $push: { comment: result._id } }).then(() => {
        res.status(201).json("created comment");
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteComment = (req, res) => {
  const { id } = req.params;
  const { user } = req.body;
  console.log(req.token);
  if (req.token.id == user || req.token.role == "admin") {
    commentModel
      .findByIdAndUpdate(id, { $set: { isDel: true } })
      .then((result) => {
        if (result) {
          res.status(200).json("comment removed");
        } else {
          res.status(404).json("comment does not exist");
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(403).json("You don't have privileges to remove this comment");
  }
};



module.exports = {
  createComment,
  deleteComment,
};