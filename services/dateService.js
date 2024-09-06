const formatDate = (date) => {
    if (!isNaN(date.getTime())) {
        return {
            unix: date.getTime(),
            utc: date.toUTCString()
        };
    }
    return {
        error: 'Invalid Date'
    };
};

module.exports = formatDate;
