const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'https://via.placeholder.com/300' },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    cuisines: { type: String, required: true },
    founded: Number,
});

module.exports = mongoose.model('Place', placeSchema);

let places = [
    {
        name: 'Le Croissant 🤌',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'French, Bakery',
        pic: '/images/croissant-family-restaurant.png',
    },
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250',
    },
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250',
    },
];

// module.exports = places;
