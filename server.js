const express = require('express');
const path = require('path');
// const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
const cors = require('cors');


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(cors({
  origin: 'https://z3nsatishiyer.zendesk.com'
}));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
