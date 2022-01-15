const subscribeModel = require("../../db/models/subscriptions");

/////Subscription controller

const getSubscribeList = (req, res) => {
    const id = req.token.id;
    subscribeModel
        .find({ userId: id, isDel: false })
        .populate({ path: 'podcast', match: { isDel: false } })
        .sort({ date: -1 }).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(400).json(err);
        })
}
const subscribe = (req, res) => {
    const { id } = req.params;
    subscribeModel.findOne({ userId: req.token.id, podcast: id, isDel: false }).then(result => {
        if (result) {
            res.status(400).json("Already subscribed!");
        } else {
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
        }
    }).catch(err => {
        res.status(400).json(err);
    })
};
const UnSubscribe = (req, res) => {
    const { id } = req.params;
    const userId = req.token.id;
    subscribeModel
        .updateOne({ _id: id }, { isDel: true })
        .then((result) => {
            console.log(result);
            res.status(200).json("UnSubscribed!");
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};
module.exports = {
    subscribe,
    UnSubscribe,
    getSubscribeList
};