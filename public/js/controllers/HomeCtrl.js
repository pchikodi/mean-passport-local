angular.module('HomeCtrl', []).controller('HomeController', function($scope,$location) {
	$scope.welcomeMessage = "You have successfully logedin";
	
	$scope.logout = function(){
		$location.path( "/" );
	}
});