const express = require('express');
const { chargeCard, testing } = require('../controller/controller');
const router = express.Router();

router.get('/chargeFakeCard', chargeCard);

module.exports = router;
