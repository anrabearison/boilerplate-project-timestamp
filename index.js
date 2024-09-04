// index.js
// where the node app starts

const app = require('./app');

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
