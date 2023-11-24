const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const authenRoutes = require("./routes/authen");
const clientRoutes = require("./src/routes/client/client.js");
// const adminRoutes = require("./routes/admin");
const database = require("./src/config/db/database.js");
// const multer = require("multer");
const app = express();
const port = 5000;
app.use(cors());

database.connect();
// test
app.use("/api", clientRoutes);

app.listen(port);
