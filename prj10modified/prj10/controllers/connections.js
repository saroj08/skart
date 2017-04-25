
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://syam:syam@ds151820.mlab.com:51820/myname');
// var imagesfile=mongoose.schema({
//     path: {
//  type: String,
//  required: true,
 
//  },
//  originalname: {
//  type: String,
//  required: true
//  }
 
// });

var userregisterSchema = mongoose.Schema({
	name: String,
    email: String,
    username:String,
    password:String,
    file:String,
    // images:[imagesfile]
});

// var images= mongoose.model("register",userregisterSchema);
var user = mongoose.model("register",userregisterSchema);
module.exports = user;