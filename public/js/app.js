console.log('cactus');

var app = angular.module("dogApp", []);

app.controller("mainController", ['$http', function($http){
	this.dogs = [];
	var controller = this;
		

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



}]);  // close main controller