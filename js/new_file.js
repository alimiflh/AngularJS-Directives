
var app = angular.module("app", [])
app.controller("ctrl1", function($scope, $http) {
	$scope.searchName = "";

	$scope.getActors = function() {
		var promise = $http.get("http://api.themoviedb.org/3/search/person?api_key=f24727bdb915ca05f7718876104b211d&query=" + $scope.searchName);
		promise.then(sucessCallback)
		function sucessCallback(response) {
			$scope.results = response.data.results;
		}

	}

	$scope.getMoviesById = function(id) {
		$scope.ddc = id;
		var promise = $http.get("http://api.themoviedb.org/3/person/" + $scope.ddc + "/movie_credits?api_key=f24727bdb915ca05f7718876104b211d");
		promise.then(sucessCallback)
		function sucessCallback(response) {
			$scope.cast = response.data.cast;
			$scope.show = "false";
	
		}

	}
	});
	app.directive("templates",function(){
	return{
		templateUrl:"templates/templates.html",

					restrict:"E"
	
	}
	
})
