var express = require('express');
var router = express.Router();
var Dog = require('../models/dogs.js');



//
//INDEX

router.get('/', function(req, res){
	Dog.find(function(err, dog){
		res.send(dog);
	});

	//res.send('hellow from the dogs controller');
});


router.get('/seed', function(req, res){

	var dogs = [
	{	name: 'Rye', 
		breed: 'pit',
		gender: 'male',
		rate: 1000,
		age: 3},
	{	name: 'Lola', 
		breed: 'pit',
		gender: 'female',
		rate: 700,
		age: 8},
	{	name: 'Cash', 
		breed: 'pit',
		gender: 'female',
		rate: 1100,
		age: 3},
	{	name: 'Duffy', 
		breed: 'butterfly dog',
		gender: 'male',
		rate: 40,
		age: 9},
	{	name: 'Wrigley', 
		breed: 'norfolk terrier',
		gender: 'male',
		rate: 1000,
		age: 8}	
		];
			
	// CREATE THE SEEDED USERS IN DB
	Dog.create(dogs, function(err, dogs){
		res.redirect('/');
	});
});


module.exports = router;