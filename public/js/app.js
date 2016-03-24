console.log('cactus');

var app = angular.module("dogApp", []);

app.controller("mainController", ['$http', function($http){
	this.dogs = [];
	var controller = this;
		
	$http.get('/dogs').then(
		function(response){

			controller.dogs = response.data;
		},
		function(){
			console.log(err);
		}
		)	


}]);