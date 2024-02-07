require('dotenv').config();
const express = require('express');
const app = express();
const render = require('./render');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(render('Home'));
});

// Load the places controller
app.use('/places', require('./controllers/places'));

// Wildcard/404 route
app.get('*', (req, res) => {
    console.log('user requested unknown route: ', req.url);
    res.status(404).send(render('Error404'));
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
