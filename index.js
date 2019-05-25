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
const graphql = require('graphql');




app.use(logger('dev')) ;


const query = `
{
  shop {
    name
    primaryDomain {
      url
      host
    }
  }
}
`;


fetch('https://untuckit.myshopify.com/api/graphql', {
  method: 'POST',
  body: query,
  headers: {
    'Content-Type': 'application/graphql',
    'X-Shopify-Storefront-Access-Token': '8f2a0e5f3dcdd370eda00da08c727aa0'
  }
})
.then(res => res.json())
.then(res => console.log(res.data))
.catch(error => console.log(error))




app.use('/', routes)

app.listen(3000, () => console.log("Listening on port 3000"));

