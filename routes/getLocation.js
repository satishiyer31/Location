const location = require('express').Router();
const { readFromFile } = require('../helpers/fsUtils');


// GET Route for retrieving all the locations
location.get('/', (req, res) => {
  readFromFile('./db/location.json').then((data) => res.json(JSON.parse(data)));
});

location.get('/:id', (req, res) => {
  readFromFile('./db/location.json').then((data) => {
    const result = data.filter(loc => loc.org_id==req.params.id);

    res.json(JSON.parse(result))
  
  });
});


module.exports = location;
