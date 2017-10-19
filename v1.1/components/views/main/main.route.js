(function(){
	'use strict';

	angular.module('view.main', ['ui.router'])

	.config(mainConfig);
	mainConfig.$inject = ['$stateProvider'];

	function mainConfig($stateProvider) {
		var state = 'main',
			statParams = {
				url: '/',
				title: 'main',
				templateUrl: 'components/views/main/main.html',
				controller: 'mainCtrl',
				controllerAs: 'vm'
			};
		$stateProvider.state(state, statParams);
		return;
	}

})();