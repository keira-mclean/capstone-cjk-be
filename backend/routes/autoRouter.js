const express = require('express');
const router = express.Router();

const autoController = require("../controllers/autoController");

router.get('/', autoController.findAll);
router.post('/', autoController.post);
router.findById('/:id', autoController.findByID)

module.exports = router;
