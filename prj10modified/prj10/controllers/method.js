var connection = require("./connections");
var bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database'); 
exports.getuserdetailes=function(req, res){
    var details=new connection({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        file:req.body.image
    })
     console.log("image"+req.body.name);
    details.save(function(err,success){
        if(err)
        throw err;
        else{
            //res.json("successfully registered");
            bcrypt.genSalt(10, function(err, salt) {
                console.log(details);
    bcrypt.hash(details.password, salt, function(err, hash) {
        if(err)
        throw err;
        else{
        details.password=hash;
        console.log(details.password);
        details.save(function(err,success){
        if(err){
            throw err
        }
        else{
            console.log("success");
        }
    })
        res.json(details);
        }
        // Store hash in your password DB. 
    });
  
});

        }
    })
}
exports.getusername=function(req, res){
   
        userName=req.body.username;
        passWord=req.body.password ;
console.log(req.body);

    connection.find({username:userName},function(err,user){
        if(err){
            throw err
        }
        else if(user[0]==undefined){
       
            return res.json({ success: false, msg: 'User Not Found'});
        }
        else if(user)
        { 
            bcrypt.compare (passWord, user[0].password, function(err, isMatch) {
             if (err){ 
                     return err
                     }
           
                else if(isMatch){
                    console.log("valid user");
                       const token = jwt.sign(user[0], "1234567", {
                    expiresIn: 604800 // 1 week
                         });
                    res.json({ 
                    success : true,
                    token : 'JWT ' +token,
                    user : {
                        id: user[0]._id,
                        name : user[0].name,
                        username : user[0].username,
                        email : user[0].email,
                        image:user[0].file
                         },

                        });
            }
            else {
                res.json(" password doesnt match")
            }
            })
      }
    else{
         res.json("doesnt match");
    }

})//find
}//getuser
