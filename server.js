//
//REQUIREMENTS

var express = require('express');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/dogs';



//
//CONFIGURATION

mongoose.connect(mongoUri);



//
//MIDDLEWARE

app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));




//
//ROUTES AND CONTROLLERS
var dogsController = require('./controllers/dogs.js');
app.use('/dogs', dogsController);




// app.get('/', function(req, res){
// 	res.redirect('/dogs');
// });


//
//LISTEN

app.listen(port);
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("the dogs are listening")