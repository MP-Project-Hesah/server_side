const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {initializeApp,cert} = require('firebase-admin/app');
const serviceAccount = require('./config/serviceAccountKey.json');

require("./db");
initializeApp({
  credential: cert(serviceAccount) // change with your service account key 
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const roleRouter = require('./routers/routes/role');
const userRouter = require("./routers/routes/user");
const podcastRouter = require("./routers/routes/podcast");
const episodeRouter = require("./routers/routes/episode");
const commentRouter = require("./routers/routes/comment");
const subscriptionRouter = require("./routers/routes/subscriptions");



app.use(roleRouter);
app.use(userRouter);
app.use(podcastRouter);
app.use(episodeRouter);
app.use(commentRouter);
app.use(subscriptionRouter);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});