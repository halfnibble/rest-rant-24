const db = require('../models');

db.Place.create([
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg',
        founded: 1989,
    },
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg',
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
