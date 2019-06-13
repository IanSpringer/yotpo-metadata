const Order = require('../models/Order');
const controller = {};

controller.create = (req, res) => {
	const order = new Order({
		orderSample: req.body.email
	})

	console.log(order)

	order.save(err => {
		if(err) throw err;
		res.json(order)
	})
}

controller.index = (req, res) => {
	Order.find({}, function(err, orders) {
		if(err) throw err;
		console.log('the order', orders);
		res.json(orders);
	})
}

module.exports = controller;