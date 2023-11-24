const express = require("express");

// const {body } = require('express-validator');
const homeController = require("../../controllers/client/homeController");
const router = express.Router();

router.get("/home", homeController.getDatasHome);

module.exports = router;
