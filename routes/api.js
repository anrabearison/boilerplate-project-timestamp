const express = require('express');
const router = express.Router();
const formatDate = require('../services/dateService')

// Route for dates
router.get('/:date?', (req, res) => {
    const date_string = req.params.date;

    let date;
    if (!date_string) {
        date = new Date();
    } else if (/\d{5,}/.test(date_string)) {
        date = new Date(parseInt(date_string));
    } else {
        date = new Date(date_string);
    }

    res.json(formatDate(date));
});

module.exports = router;