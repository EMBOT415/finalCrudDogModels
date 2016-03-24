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
		images:['http://res.cloudinary.com/embot415/image/upload/v1458837293/DSCN1736_mcft3o.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458830013/DSCN0136_evfitu.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458830013/DSCN0048_qyq4o0.jpg']
	},
	{	name: 'Emma', 
		breed: 'goldendoodle',
		gender: 'female',
		rate: 1500,
		age: 10,
		images:['http://res.cloudinary.com/embot415/image/upload/v1458838306/IMG_7688_zsz1lu.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458830001/IMG_7702_h9ei9u.jpg']
	},
	{	name: 'Alfie', 
		breed: 'tan dog',
		gender: 'male',
		rate: 1000,
		age: 7,
		images: ['http://res.cloudinary.com/embot415/image/upload/v1458837308/IMG_0361_hlkpoo.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458829174/IMG_1084_xubbfv.jpg', 'http://res.cloudinary.com/embot415/image/upload/v1458829167/IMG_1011_u8xj0d.jpg']
	},
	{	name: 'Wilbur', 
			breed: 'French Bulldog',
			gender: 'male',
			rate: 1100,
			age: 7,
			images: ['http://res.cloudinary.com/embot415/image/upload/v1458841469/Screen_Shot_2016-03-24_at_1.38.49_PM_brc0mm.png', 'http://res.cloudinary.com/embot415/image/upload/v1458841469/Screen_Shot_2016-03-24_at_1.39.00_PM_aqu3rj.png', 'http://res.cloudinary.com/embot415/image/upload/v1458841471/Screen_Shot_2016-03-24_at_1.37.46_PM_ytpu8j.png', 'http://res.cloudinary.com/embot415/image/upload/v1458841470/Screen_Shot_2016-03-24_at_1.43.17_PM_yzjwg9.png', 'http://res.cloudinary.com/embot415/image/upload/v1458841470/Screen_Shot_2016-03-24_at_1.40.09_PM_ba42al.png']
	},
		{	name: 'Oliver Siegfried', 
			breed: 'pom-a-poo',
			gender: 'male',
			rate: 1900,
			age: 3,
			images: ['http://res.cloudinary.com/embot415/image/upload/v1458842995/Screen_Shot_2016-03-24_at_2.06.43_PM_ek32au.png', 'http://res.cloudinary.com/embot415/image/upload/v1458842995/Screen_Shot_2016-03-24_at_2.06.43_PM_ek32au.png', 'http://res.cloudinary.com/embot415/image/upload/v1458842995/Screen_Shot_2016-03-24_at_2.04.48_PM_fpbsba.png', 'http://res.cloudinary.com/embot415/image/upload/v1458842996/Screen_Shot_2016-03-24_at_2.05.31_PM_ymf9hj.png']
	},
	{	name: 'Cash', 
			breed: 'pit',
			gender: 'female',
			rate: 1700,
			age: 3,
			images: ['http://res.cloudinary.com/embot415/image/upload/v1458843368/Screen_Shot_2016-03-24_at_2.13.04_PM_drpuyz.png', 'http://res.cloudinary.com/embot415/image/upload/v1458843368/Screen_Shot_2016-03-24_at_2.12.45_PM_hpilvl.png', 'http://res.cloudinary.com/embot415/image/upload/v1458843368/Screen_Shot_2016-03-24_at_2.12.16_PM_qg4a6r.png', 'http://res.cloudinary.com/embot415/image/upload/v1458843368/Screen_Shot_2016-03-24_at_2.13.54_PM_fkemo0.png']
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