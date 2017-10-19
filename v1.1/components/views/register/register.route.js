(function(){
	'use strict';

	angular.module('view.register', ['ui.router'])

	.config(registerConfig);
	registerConfig.$inject = ['$stateProvider'];

	function registerConfig($stateProvider) {
		var state = 'register',
			statParams = {
				url:'/register',
				title: 'Register',
				templateUrl: 'components/views/register/register.view.html',
				controller: 'RegisterController',
				controllerAs: 'vm'
			};
		$stateProvider.state(state, statParams);
		return;
	}

})();