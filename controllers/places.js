const express = require('express');
const router = express.Router();
const render = require('../render');
const places = require('../models/places');

router.get('/', (req, res) => {
    res.send(render('Index', { places: places }));
});

module.exports = router;
