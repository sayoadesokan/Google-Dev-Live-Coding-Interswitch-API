const express = require('express');
const { chargeCard, testing } = require('../controller/controller');
const router = express.Router();

router.get('/chargefakecard', chargeCard);
router.get('/testing', testing);

module.exports = router;
