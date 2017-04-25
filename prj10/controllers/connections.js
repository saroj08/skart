
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://bablu:bablu@ds157499.mlab.com:57499/saroj');

var userregisterSchema = mongoose.Schema({
	name: String,
    email: String,
    username:String,
    password:String,
});

var user = mongoose.model("register",userregisterSchema);
module.exports = user;