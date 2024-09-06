const express = require('express');
const router = express.Router();
const formatDate = require('../services/dateService')

// Route for dates
router.get('/:date?', (req, res) => {
    const dateString = req.params.date;

    let date;
    if (!dateString) {
        date = new Date();
    } else if (isNaN(Date.parse(dateString))) {
        date = new Date(Number(dateString) * 1000);
    } else {
        date = new Date(dateString);
    }

    res.json(formatDate(date));
});

module.exports = router;