var mongoose = require('mongoose');

var dogSchema = mongoose.Schema({
	name: String,
	breed: String,
	gender: String,
	rate: Number,
	age: Number,
	images: [String]

})


module.exports = mongoose.model('Dog', dogSchema);