const express = require("express")
const db = require("./db/index.js");
const dotenv = require("dotenv")
const app = express()

dotenv.config()



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });