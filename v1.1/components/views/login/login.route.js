(function(){
	'use strict';

	angular.module('view.login', ['ui.router'])

	.config(loginConfig);
	loginConfig.$inject = ['$stateProvider'];

	function loginConfig($stateProvider) {
		var state = 'login',
			statParams = {
				url:'/login',
				title: 'login',
				templateUrl: 'components/views/login/login.view.html',
				controller: 'LoginController',
				controllerAs: 'vm'
			};
		$stateProvider.state(state, statParams);
		return;
	}

})();