require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello REST-Rant World!');
});

// Wildcard/404 route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
