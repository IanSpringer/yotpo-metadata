const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order_controller.js')


router.route('/')
	.get(orderController.index)
	.post(orderController.create)

router.route('/destroy')
	.get(orderController.destroy)

module.exports = router;
