var JwtStrategy = require('passport-jwt').Strategy;
  var ExtractJwt = require('passport-jwt').ExtractJwt
// const User = require('../models/user');
var secret=require('./secret');
var connection = require("../controllers/connections");
const config = require('./database');
var passport=require('passport');
module.exports = function(passport) {
    var opts = {};
    console.log("jwt_payload");
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = '1234567';
    console.log(opts.jwtFromRequest);
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log("jwt_payloadwre6yfuhdf");
        console.log(jwt_payload);
        connection.findById({_id:jwt_payload._doc._id}, (err, user) => {
            console.log(user);
            if(err) {
                console.log(err);
                return done(err, false);
            }
            else if(user) {
                console.log(user);
                return done(null, user);
            }else {
                return done(null, false);
            }
        });
    }));
}