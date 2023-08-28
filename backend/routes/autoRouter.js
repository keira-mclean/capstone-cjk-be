const express = require('express');
const router = express.Router();

const autoController = require("../controllers/autoController");

router.get('/', autoController.findAll);
router.get('/makes', autoController.findMakes);
router.post('/', autoController.post);

module.exports = router;
