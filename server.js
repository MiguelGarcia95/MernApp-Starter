const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();

//Bodyparser middleware
// app.use(bodyParser.json());
app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Uer Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server is up on port: ', port);
});