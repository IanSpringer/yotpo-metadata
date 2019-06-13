const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	orderSample: String
}) ;

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;