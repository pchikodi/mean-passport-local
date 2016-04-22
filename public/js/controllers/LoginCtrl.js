angular.module('LoginCtrl', []).controller('LoginController', function($scope, User, $location) {
	
	$scope.user = {username : '',password : ''};
	$scope.message = '';
	$scope.login = function(){
		User.login($scope.user).success(function(data) {
			console.log('login success',data);
			if(data.loginSuccess) $location.path( "/home" );
			$scope.message = "Incorrect Username or Password";
		});
	}
});