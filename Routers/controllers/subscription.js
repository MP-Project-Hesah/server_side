const subscribeModel = require("../../db/models/subscriptions");

/////Subscription controller

const subscribe = (req, res) => {
    const { id } = req.params;

    const newSubscribe = new subscribeModel({
        userId: req.token.id,
        podcast: id,
    });
    newSubscribe
        .save()
        .then((result) => {
            res.status(200).json('Successfully Subscribed!');
        }).catch((err) => {
            res.status(400).json(err);
        });
};
const UnSubscribe = (req, res) => {
    const { id } = req.params;
    const userId = req.token.id;
    subscribeModel
        .deleteOne({ userId, podcast: id })
        .then((result) => {
            res.status(200).json("UnSubscribed!");
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};



module.exports = {
    subscribe,
    UnSubscribe,
};