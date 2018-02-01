var mongoose = require('mongoose');

module.exports = mongoose.model('products', {
	code: String,
	name: String,
	price: Number,
	avatarUrl: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Number,
		default: 1
	}
});