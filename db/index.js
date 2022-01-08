const mongoose = require('mongoose');
const { db } = require('./models/podcast');
require('dotenv').config()
const DB = process.env.DB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


mongoose.connect(`mongodb://localhost/podcasterr`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err.message);
  }
);