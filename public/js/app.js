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

this.deleteDog = function(dog1){
	console.log('delete clicked');

	$http({
		method: "DELETE",
		url: "/dogs/:id",


	})
	.then(function(results){
	 console.log(results)
	 initialize();
	},
	function(err){
		console.log(err)

	}
	)};

}]);  // close main controller