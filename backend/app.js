const express = require('express');
const app = express();
app.use(express.json());

// Import the auth route
const authRoute = require('./routes/route');

// Use the auth route under the /app path
app.use('/app', authRoute);

app.get('/', (req, res) => {
    res.send('hello');
});

module.exports = app;
