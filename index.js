require('dotenv').load();
const express = require('express');
const session = require('express-session');
const app = express();
const router = express.Router();
const routes = require('./routes/mainRoutes');
const path = require('path');
const key = process.env.SHOPIFY_USERNAME;
const password = process.env.SHOPIFY_PASSWORD;
const store = process.env.SHOPIFY_STORE_URL;
const mongoose = require('mongoose');
const Order = require('./models/order');
const db = require('./db.js');
const port = process.env.PORT || 3000


const date = Date.now();
const now = new Date(date);

fetch(`https://${key}:${password}@${store}/admin/api/2019-04/orders.json`)
  .then(response => response.json())
  .then(data => {
    // console.log(data.orders);
  })
  .catch(err => {
    console.log(err);
  })

app.listen(port, () => console.log("Listening on port 3000"));

