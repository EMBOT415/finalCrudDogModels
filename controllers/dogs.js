var express = require('express');
var router = express.Router();
var Dog = require('../models/dogs.js');



//
//INDEX
router.get('/', function(req, res){
	//res.send('hello from the dog side');

	Dog.find({}, function(err, dogs){
		res.json(dogs);
	
	});
});





// 
//json data

// router.get('/json', function(req, res){
// 	Dog.find(function(err, dog){
// 		res.send(dog);
// 	});

// 	//res.send('hellow from the dogs controller');
// });


router.get('/seed', function(req, res){

	var dogs = [
	{	name: 'Rye', 
		breed: 'pit',
		gender: 'male',
		rate: 1000,
		age: 3,
		images: ['http://res.cloudinary.com/embot415/image/upload/v1458829178/IMG_8522_zowuyd.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458829178/IMG_7440_hmxdxw.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458829159/IMG_7559_qpvo4c.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458829162/IMG_8264_dke94p.jpg']
	},
	{	name: 'Lola', 
		breed: 'pit',
		gender: 'female',
		rate: 700,
		age: 8,
		images:['http://res.cloudinary.com/embot415/image/upload/v1458830022/DSCN1736_c7meyq.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458830013/DSCN0136_evfitu.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458830013/DSCN0048_qyq4o0.jpg']
},
	{	name: 'Emma', 
		breed: 'goldendoodle',
		gender: 'female',
		rate: 1500,
		age: 10,
		images:['http://res.cloudinary.com/embot415/image/upload/v1458829970/IMG_7688_dpmcrp.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458830001/IMG_7702_h9ei9u.jpg']
},
	{	name: 'Alfie', 
		breed: 'tan dog',
		gender: 'male',
		rate: 1000,
		age: 7,
		images: ['http://res.cloudinary.com/embot415/image/upload/v1458829162/IMG_0361_ynyqha.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458829174/IMG_1084_xubbfv.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458829167/IMG_1011_u8xj0d.jpg']
},
	{	name: 'Wrigley', 
		breed: 'norfolk terrier',
		gender: 'male',
		rate: 1000,
		age: 8,
		images: ['http://res.cloudinary.com/embot415/image/upload/v1458829173/IMG_1118_zpoatj.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458829159/IMG_1322_gujk3c.jpg']
}	
		];
			
	// CREATE THE SEEDED USERS IN DB
	Dog.create(dogs, function(err, dogs){
		res.redirect('/');
	});
});


module.exports = router;