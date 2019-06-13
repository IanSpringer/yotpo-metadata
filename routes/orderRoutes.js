const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order_controller.js')


router.route('/')
	.get(orderController.index)
	.post(orderController.create)

module.exports = router;
