// var bodyparser=require("body-parser");
// var urlencodedparser=bodyparser.urlencoded({extended:false});
//var mysql      = require('mysql');
var path = require('path');
var multer=require('multer');
var fs = require("fs");
//var mltr=multer({ dest: './uploads/'}).single('File');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//    database : 'newdatabase'
// });

//connection.connect();
// connection.query("use "+ "newdatabase");
// connection.query('use'+'newdatabase');



// exports.fileload=function(req, res)
//  {
//   var storage =   multer.diskStorage({

//     destination: function (req, file, callback) {

//       callback(null, './public/images');
//     },
//   filename: function (req, file, callback) {
//    callback(null, file.originalname);
//   }
//   });
//   var upload = multer({ storage : storage}).array('File');
// //   router.post('/', images.any(), function(req, res, next) {
//  console.log(upload);

//  res.json(upload);
// //   })
//  }

exports.fileload = function(req,res){
 
//  var contents = fs.readFileSync("./product.json");
var obj = require("./product.json");
  //var jsonContent = JSON.parse(contents);
  console.log(obj);
    console.log("fileload function");
var files = getFiles('./public/images');

function getFiles(dir){
    fileList = [];
 console.log(dir);
    var files = fs.readdirSync(dir);
    console.log(files);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (!fs.statSync(name).isDirectory()){
            fileList.push(name);
        }
    }
    return fileList;
}
res.json({files:files,contents:obj});
// console.log(getFiles('./public/images'));
}



// Define JSON File
//  var fs = require("fs");
//  console.log("\n *STARTING* \n");
// Get content from file
//  var contents = fs.readFileSync("jsoncontent.json");
// Define to JSON type
//  var jsonContent = JSON.parse(contents);
// Get Value from JSON
//  console.log("User Name:", jsonContent.username);
//  console.log("Email:", jsonContent.email);
//  console.log("Password:", jsonContent.password);
// log("\n *EXIT* \n");