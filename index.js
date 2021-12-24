require('dotenv').config()
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");

const app = express();

// Import routes
const home = require("./routers/routes/home");
const auth = require("./routers/routes/auth");
const users = require("./routers/routes/users");
// const admin = require("./routes/admin");

//Connect to mongodb
mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."));

// Middlewares
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use("/static", express.static("public"));

// Routes
app.use("/", home);
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/podcasts", podcast);
app.use("/api/subscriptions", subscriptions);

// app.use("/api/admin", admin);

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Listenning at port ${port}`);
});
