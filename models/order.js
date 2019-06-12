const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	data: Object,
	timestamp: String,
	fullfilled: Boolean
}) ;

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;