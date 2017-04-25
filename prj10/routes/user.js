var express = require('express');
var router = express.Router();
var controller=require('../controllers/method');
const passport = require('passport');
const jwt = require('jsonwebtoken');
//var passport1=require('../config/passport')(passport);

//var controller = require('../controllers/controller')

/* GET home page. */
// router.get('/', function(req, res) {
//     res.send("hai");
// });
router.post('/register', function(req, res) {
    controller.getuserdetailes(req,res);
})

router.post('/authenticate', function(req, res) {
    console.log("ghjkhklhjkl");
   // res.json("hi data");
    controller.getusername(req,res);

});
router.get('/profile',passport.authenticate('jwt', {session:false}), function(req, res) {
     console.log("fghjkl");
      res.json({user: req.user});

});
// router.post('/logOut',function(req,res){
//     console.log("logOut");
//     controller.logOut(req,res);
// });

// router.post('/getData',function(req,res){
//     console.log("getting data");
//     controller.getData(req,res);
// });
module.exports = router;