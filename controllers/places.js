const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET places list');
});

module.exports = router;
