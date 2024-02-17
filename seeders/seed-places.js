const db = require('../models');

db.Place.create([
    {
        name: 'Le Croissant 🤌',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'French, Bakery',
        pic: '/images/croissant-family-restaurant.png',
        founded: 2010,
    },
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250',
        founded: 2015,
    },
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250',
        founded: 2020,
    },
])
    .then(() => {
        console.log('Places seeded successfully!');
        process.exit(0);
    })
    .catch((err) => {
        console.log('Places failed to seed!', err);
        process.exit(1);
    });
