var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	phone: String,
	gender: Number,
	birthday: Date,
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