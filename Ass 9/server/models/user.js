const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		//name: { type: String, required: true },
		email: { type: String},
		password: { type: String},
	},
	{ collection: 'newcols' }
)

const model = mongoose.model('UserData', User)

module.exports = model