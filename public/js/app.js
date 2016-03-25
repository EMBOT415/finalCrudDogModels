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


	this.getDogs = function(){
		//this.formdata = {};
		$http({
			method:"GET",
			url: "/dogs"
		})
		.then(function(response){
			controller.dogs = response.data;
		});
	}



	this.addDog = function(){
		$http({
			method: "POST",
			url: "/dogs",
			data: this.formdata

		})
		.then(function(results){
		 console.log(results)
		
		 controller.getDogs();
		 form.reset();
		 //this.formdata = null;
		  //initialize();
		},
		function(err){
			console.log(err)

		}
		)};

	this.editDog = function(dog){
		$http({
			method: "PUT",
			url: "/dogs/" + controller.dogId,
			data: this.formdata

		})
		.then(function(results){
		 console.log(results)
		 controller.getDogs();

		},
		function(err){
			console.log(err)

		}
		)};


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
						controller.getDogs();
						console.log('success')

				}, 
				function(err){
					console.log(err)
				}
			)
		 };


}]);  // close main controller