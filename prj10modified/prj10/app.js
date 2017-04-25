var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport=require("passport");
var cors = require("cors");
var index = require('./routes/index');
var users = require('./routes/users');
var userdata=require('./routes/user');
var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ extended: false,limit: '50mb'}));
app.use(bodyParser.json({ limit: '50mb' }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/', index);
app.use('/users', users);
app.use('/user', userdata);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,json/application');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})
//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// app.get('/', function(req, res) {
//     console.log("ghjkhklhjkl");
//     res.json("hi data");
//     //controller.getusername(req,res);

// });

module.exports = app;
