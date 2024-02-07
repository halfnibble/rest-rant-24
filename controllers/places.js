const express = require('express');
const router = express.Router();
const render = require('../render');
const places = require('../models/places');

router.get('/', (req, res) => {
    res.send(render('places/Index', { places: places }));
});

router.get('/new', (req, res) => {
    res.send(render('places/New'));
});

router.post('/', (req, res) => {
    const newPlace = { ...req.body };
    if (!newPlace.pic) {
        newPlace.pic = 'https://via.placeholder.com/300';
    }
    if (!newPlace.city) {
        newPlace.city = 'Unknown';
    }
    if (!newPlace.state) {
        newPlace.state = 'USA';
    }
    places.push(newPlace);
    res.redirect('/places');
});

module.exports = router;
