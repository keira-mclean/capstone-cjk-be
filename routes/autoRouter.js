const express = require('express');
const router = express.Router();

const autoController = require("../controllers/autoController");

router.get('/', autoController.findAll)


module.exports = router;