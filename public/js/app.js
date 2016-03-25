console.log('cactus');

var app = angular.module("dogApp", []);

app.controller("mainController", ['$http', function($http){
	this.dogs = [];
	var controller = this;
		

//automate form empty
	var initialize = function() {
  this.formdata = {};
}

	$http.get('/dogs').then(
		function(response){
			controller.dogs = response.data;
		},
		function(){
			console.log(err);
		}
		)	



this.addDog = function(){
	$http({
		method: "POST",
		url: "/dogs",
		data: this.formdata

	})
	.then(function(results){
	 console.log(results)
	 initialize();
	},
	function(err){
		console.log(err)

	}
	)};

// this.editDog = function(dog1){
// 	$http({
// 		method: "POST",
// 		url: "/dogs",
// 		data: this.formdata

// 	})
// 	.then(function(results){
// 	 console.log(results)
// 	 initialize();
// 	},
// 	function(err){
// 		console.log(err)

// 	}
// 	)};


this.deleteDog = function(dog){

	 	console.log('delete clicked')
	 	this.dogId = dog._id;
	 	console.log(dog._id)
		$http({
			method: "DELETE",
			url:'/dogs/' + controller.dogId,
			data: dog
		})
		.then (
			function(response) {
					//controller.getUsers();
					console.log('success')
			}, 
			function(err){
				console.log(err)
			}
		)
	 };

//This deletes everything

// this.deleteDog = function(dog){
// 	// var doggie;
// 	// this.doggie = dog1
// 	console.log('delete clicked');
// 	console.log(dog) //undefined
// 	$http({
// 		method: "DELETE",
// 		url: "/dogs/:id",
// 		data: dog


// 	})
// 	.then(function(results){
// 	 console.log('success accessed')
// 	 console.log(results)
// 	 initialize();
// 	},
// 	function(err){
// 		console.log(err)

// 	}
// 	)};

}]);  // close main controller