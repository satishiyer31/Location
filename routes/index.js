const express = require('express');



// Import our modular routers for location
const locationRouter = require('./getLocation.js');


const app = express();

app.use('/getLocation', locationRouter);
// app.use('/feedback', feedbackRouter);

// Initialize custom middleware
// app.use(clog);

module.exports = app;
