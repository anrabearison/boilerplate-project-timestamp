const express = require('express');
const router = express.Router();
const formatDate = require('../services/dateService')

// Route for dates
router.get('/:date?', (req, res) => {
    const dateString = req.params.date;

    let date;
    if (!dateString) {
        date = new Date();
    } else if (!isNaN(Number(dateString))) {
        date = new Date(Number(dateString));
    } else {
        date = new Date(dateString);
    }

    res.json(formatDate(date));
});

module.exports = router;