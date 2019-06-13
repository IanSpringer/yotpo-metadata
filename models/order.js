const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	orderTime: String
}) ;

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;