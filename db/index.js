const mongoose = require('mongoose');
const { db } = require('./models/podcast');
require('dotenv').config()
const DB = process.env.DB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let liveDB = `mongodb+srv://xufyandb:xufyandb@cluster0-j88e0.mongodb.net/${DB}?retryWrites=true&w=majority`;
let localDB = `mongodb://localhost:27017/${DB}`;
let database = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? localDB : liveDB;
mongoose.connect(database, options).then(() => {
  console.log("DB is connected!");
});
