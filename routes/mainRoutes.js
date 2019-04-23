const express = require('express');
const router = express.Router();
const fetch = require('isomorphic-fetch')


router.get('/', (req, res) => {
	fetch("https://api.yotpo.com/v1/widget/4bQZVaAkK8Pueyf6OmBRO4DzM5OCXvL8tymkB7hc/products/2409624535118/reviews.json")
		.then(response => response.json())
		.then(data => {
			let latestReviews = data.reviews
			console.log(data.response.reviews)
		})
		.catch(err => {
			console.log(err)
		})
})


module.exports = router;