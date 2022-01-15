const roleModel = require("./../../db/models/role");

const createRole = (req, res) => {
  const newRole = new roleModel(req.body);
  newRole
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


const roles = (req, res) => {
  roleModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


module.exports = {
  createRole,
  roles,
};