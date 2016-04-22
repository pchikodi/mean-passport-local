angular.module('UserService', []).factory('User', ['$http', function($http) {
	
	return {
		login : function(data){
			return $http.post('/login', data);
		}
		
	}
}]);