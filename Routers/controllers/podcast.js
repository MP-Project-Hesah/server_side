

/// CRUD on podcast 

const podcastModel = require("../../db/models/podcast");
const episodeModel = require('../../db/models/episode');
const viewModel = require('../../db/models/views');

const storageRef = require('../../helper/fb.storage');


const AdminGetPodcast = (req, res) => {
  const { limit, page } = req.body;
  podcastModel
    .paginate({ isDel: false }, { page, limit, populate: 'userId', })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

const getPodcast = (req, res) => {
  podcastModel
    .find({ isDel: false })
    .populate('userId')
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      res.status(200).json(err);
    });
};
const getYourPodcast = (req, res) => {
  podcastModel
    .find({ isDel: false, userId: req.token.id })
    .populate({ path: 'episode', match: { isDel: false } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
}
const getPodCastById = (req, res) => {
  const { id } = req.params;
  podcastModel
    .findOne({ isDel: false, _id: id })
    .populate({ path: 'episode', match: { isDel: false }, options: { sort: { 'date': -1 } } })
    .populate({ path: 'comment', match: { isDel: false }, options: { sort: { 'date': -1 } }, populate: { path: 'userId' } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
}
///  Create Podcast 
const createPodcast = async (req, res) => {
  let photo = ""
  if (req.file) {
    photo = await uploadImage(req.file);
  }
  const { name, description, category } = req.body;
  if (!name || !description || !category) {
    return res.status(400).json("Something Missing!");
  }
  const newPodcast = new podcastModel({ name, description, photo, category, userId: req.token.id });
  newPodcast
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(403).json(err);
    });
};
const updatePodCast = async (req, res) => {
  let body = {};
  let photo = ""
  if (req.file) {
    photo = await uploadImage(req.file);
    body.photo = photo;
  }
  const { name, description, category } = req.body;
  if (!name || !description || !category) {
    return res.status(400).json("Something Missing!");
  }
  body.name = name;
  body.description = description;
  body.category = category;
  podcastModel.findOneAndUpdate({ _id: req.params.id }, { $set: { ...body } }).then((result) => {
    res.status(200).json("Podcast updated!")
  }).catch((err) => {
    res.status(403).json(err);
  })
}
const deletePodcast = (req, res) => {
  const { id } = req.params;
  podcastModel.findOne({ _id: id, isDel: true }).then((result) => {
    if (result) {
      res.status(404).json("Podcast Already Deleted!");
    } else {
      podcastModel.updateOne({ _id: id }, { isDel: true }).then(() => {
        episodeModel.updateOne({ podcast: id }, { isDel: true }).then(() => {
          res.status(200).json("Podcast Deleted!")
        })
      })
    }
  }).catch((err) => {
    res.status(403).json(err);
  })
}
const podcastView = (req, res) => {
  const { id } = req.params;
  const userId = req.token.id;
  podcastModel.findOne({ _id: id, isDel: false, userId }).then((result) => {
    if (result) {
      res.status(200).json("user view the podcast!")
    } else {
      const newView = new viewModel({ podcastId: id, userId });
      newView.save().then((result) => {
        res.status(200).json("user view the podcast!")
      }).catch((err) => {
        res.status(403).json(err);
      })
    }
  }).catch((err) => {
    res.status(403).json(err);
  })
}
const uploadImage = async (file) => {
  const imageBuffer = new Uint8Array(file.buffer);
  file = storageRef.file('photos/' + file.originalname);

  await file.save(
    imageBuffer,
    { resumable: false, metadata: { contentType: file.mimetype } },
  );
  file = await file.getSignedUrl({
    action: 'read',
    expires: '12-31-2030'
  })
  return file[0];
}

module.exports = { createPodcast, deletePodcast, getPodcast, updatePodCast, getYourPodcast, getPodCastById, AdminGetPodcast, podcastView };