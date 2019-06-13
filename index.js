require('dotenv').load();
const express = require('express');
const session = require('express-session');
const app = express();
const router = express.Router();
const path = require('path');
const key = process.env.SHOPIFY_USERNAME;
const password = process.env.SHOPIFY_PASSWORD;
const store = process.env.SHOPIFY_STORE_URL;
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes.js')
const db = require('./db.js');
const port = process.env.PORT || 3000;
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/orders', orderRoutes);

const request = async () => {
	const orderData = await fetch(`https://${key}:${password}@${store}/admin/api/2019-04/orders.json`);
	const orderJSON = await orderData.json();
	const postData = await orderJSON.orders[orderJSON.orders.length - 1] ;
	const postOrders = await fetch('http://localhost:3000/orders', {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		referrer: 'no-referrer',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(postData)
	})
	  .then(data => console.log(JSON.stringify(data))) 
	  .catch(error => console.error(error));
}

request()

app.listen(port, () => console.log("Listening on port 3000"));

