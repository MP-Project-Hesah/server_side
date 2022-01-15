const express = require("express");
const {
    subscribe,
    UnSubscribe,
    getSubscribeList
} = require("./../controllers/subscription");
const authentication = require("../middleware/authentication");

const subscriptionRouter = express.Router();

subscriptionRouter.get("/subscribe/list", authentication, getSubscribeList);
subscriptionRouter.get("/subscribe/:id", authentication, subscribe);
subscriptionRouter.get("/unsubscribe/:id", authentication, UnSubscribe);

module.exports = subscriptionRouter;