const formatDate = (date) => {
    if (!isNaN(date.getTime())) {
        return {
            unix: date.getTime() / 1000,
            utc: date.toUTCString()
        };
    }
    return {
        error: 'Invalid Date'
    };
};

module.exports = formatDate;
