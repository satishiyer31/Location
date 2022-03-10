const location = require('express').Router();
const { readFromFile } = require('../helpers/fsUtils');


// GET Route for retrieving all the locations
location.get('/', (req, res) => {
  readFromFile('./db/location.json').then((data) => res.json(JSON.parse(data)));
});



module.exports = location;
