const podcastModel = require("../../db/models/podcast");
const episodeModel = require('../../db/models/episode');
const storageRef = require('../../helper/fb.storage');

const addEpisode = async (req, res) => {
    const { id } = req.params;
    let audio = ""
    if (req.file) {
        audio = await uploadAudio(req.file);
    }
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json("Something missing!");
    }
    const newEpisode = new episodeModel({ name, description, podcast: id, url: audio });
    newEpisode.save().then((result) => {
        podcastModel.findByIdAndUpdate(id, { $push: { episode: result._id } }).then(() => {
            res.status(200).json('Episode Added!');
        })
    }).catch((err) => {
        res.status(403).json(err);
    })
}
const deleteEpisode = (req, res) => {
    const { id } = req.params;
    episodeModel.updateOne({ _id: id }, { isDel: true }).then((result) => {
        res.status(200).json("Episode Deleted!");
    }).catch((err) => {
        res.status(403).json(err);
    })
}
const uploadAudio = async (file) => {
    const audioBuffer = new Uint8Array(file.buffer);
    file = storageRef.file('audios/' + file.originalname);

    await file.save(
        audioBuffer,
        { resumable: false, metadata: { contentType: file.mimetype } },
    );
    file = await file.getSignedUrl({
        action: 'read',
        expires: '12-31-2030'
    })
    return file[0];
}

module.exports = { addEpisode, deleteEpisode };