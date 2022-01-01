const express = require("express");
const { createRole, roles } = require("./../controllers/role");

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const roleRouter = express.Router();


roleRouter.post("/createrole",authentication, authorization, createRole);
roleRouter.get("/roles",authentication, authorization, roles);


module.exports = roleRouter;