const Order = require('../models/Order');
const controller = {};

controller.create = (req, res) => {
	const order = new Order({
		orderTime: req.body.email
	})

	order.save(err => {
		if(err) throw err;
		res.json(order)
	})
}

controller.index = (req, res) => {
	Order.find({}, (err, orders) => {
		if(err) throw err;

		res.json(orders);
	})
}

controller.destroy = (req, res) => {
	Order.remove({}, (err, orders) => {
		if(err) throw err;
		res.json(orders);
	})
}
module.exports = controller;