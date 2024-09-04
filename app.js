const express = require('express');
const cors = require('cors');

const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
app.use(cors({ optionsSuccessStatus: 200 }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Import the API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

module.exports = app;