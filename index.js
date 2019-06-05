const express = require('express');
const session = require('express-session');
const app = express();
const logger = require('morgan');
const router = express.Router();
const routes = require('./routes/mainRoutes');
const path = require('path');
const bodyParser = require('body-parser');
const key = process.env.API_KEY;
const cron = require('node-cron');


app.use(logger('dev'));

const date = Date.now();
const now = new Date(date);

fetch(`https://54cc3ee84166aa643c5ac56f0e695464:b6605f729aab0a2fd351eeb1793484c6@untuckit.myshopify.com/admin/api/2019-04/orders.json?created_at_min=${now}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.orders);
  })
  .catch(err => {
    console.log(err)
  })


app.use('/', routes)

app.listen(3000, () => console.log("Listening on port 3000"));

