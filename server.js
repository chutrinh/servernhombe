const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const clientRoutes = require("./src/routes/client/client.js");
const app = express();
const port = 5000;
app.use(cors());

app.use("/api", clientRoutes);

mongoose.connect("mongodb+srv://trinhtvfx22649:DxxTUGzQ9ivnJ3Kr@cluster0.ssvrvkk.mongodb.net/nhombe").then(()=>{
  app.listen(process.env.PORT||port);
})
