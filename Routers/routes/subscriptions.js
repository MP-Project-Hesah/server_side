const express = require("express");
const {
    subscribe,
    UnSubscribe
} = require("./../controllers/subscription");
const authentication = require("../middleware/authentication");

const subscriptionRouter = express.Router();

subscriptionRouter.get("/subscribe/:id", authentication, subscribe);
subscriptionRouter.get("/unsubscribe/:id", authentication, UnSubscribe);

module.exports = subscriptionRouter