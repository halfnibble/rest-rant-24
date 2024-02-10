const express = require('express');
const router = express.Router();
const render = require('../render');
const places = require('../models/places');

// Create a new Place
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

// GET List of Places
router.get('/', (req, res) => {
    res.send(render('places/Index', { places: places }));
});

// GET Details of a Place
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        // express-react-views:
        // res.status(400).render('Error404')

        // custom render function:
        res.status(400).send(render('Error404'));
    } else if (!places[id]) {
        // express-react-views:
        // res.status(400).render('Error404')

        // custom render function:
        res.status(400).send(render('Error404'));
    } else {
        // express-react-views:
        // res.render('places/Show', { place: places[id], id: id });

        // custom render function:
        res.send(render('places/Show', { place: places[id], id: id }));
    }
});

// Update a Place
router.get('/:id/edit', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        // express-react-views:
        // res.status(400).render('Error404')

        // custom render function:
        res.status(400).send(render('Error404'));
    } else if (!places[id]) {
        // express-react-views:
        // res.status(400).render('Error404')

        // custom render function:
        res.status(400).send(render('Error404'));
    } else {
        // express-react-views:
        // res.render('places/Edit', { place: places[id], id: id });
        res.send(render('places/Edit', { place: places[id], id: id }));
    }
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        // express-react-views:
        // res.status(400).render('Error404')

        // custom render function:
        res.status(400).send(render('Error404'));
    } else if (!places[id]) {
        // express-react-views:
        // res.status(400).render('Error404')

        // custom render function:
        res.status(400).send(render('Error404'));
    } else {
        places[id] = { ...req.body };
        res.redirect(`/places/${id}`);
    }
});

// Delete a Place
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        // express-react-views:
        // res.status(400).render('Error404')

        // custom render function:
        res.status(400).send(render('Error404'));
    } else if (!places[id]) {
        // express-react-views:
        // res.status(400).render('Error404')

        // custom render function:
        res.status(400).send(render('Error404'));
    } else {
        places.splice(id, 1);
        res.redirect('/places');
    }
});

module.exports = router;
