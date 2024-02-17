const express = require('express');
const router = express.Router();
const render = require('../render');
const places = []; // @TODO: Delete this line after connecting to MongoDB
const db = require('../models');

// Create a new Place
router.get('/new', (req, res) => {
    res.send(render('places/New'));
});

router.post('/', (req, res) => {
    const newPlace = Object.fromEntries(
        Object.entries(req.body).filter(([_, value]) => value !== '')
    );

    db.Place.create(newPlace)
        .then((place) => {
            res.redirect('/places');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send('Bad Request');
        });
});

// GET List of Places
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.send(render('places/Index', { places }));
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send(render('Error404'));
        });
});

// GET Details of a Place
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.send(render('places/Show', { place }));
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send(render('Error404'));
        });
});

// Update a Place
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.send(render('places/Edit', { place }));
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send(render('Error404'));
        });
});

router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedPlace) => {
            res.redirect(`/places/${updatedPlace.id}`);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send(render('Error404'));
        });
});

// Delete a Place
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places');
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send(render('Error404'));
        });
});

module.exports = router;
