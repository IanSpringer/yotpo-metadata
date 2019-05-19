const express = require('express');
const router = express.Router();
const fetch = require('isomorphic-fetch');
const APIKEY = process.env.SHOPIFY_USERNAME;
const PASSWORD = process.env.SHOPIFY_PASSWORD;


const date = Date.now();
const now = new Date(date);


router.get('/', (req, res) => {

})


module.exports = router;
