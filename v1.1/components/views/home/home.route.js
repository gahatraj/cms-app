(function(){
	'use strict';

	angular.module('view.home', ['ui.router'])

	.config(homeViewConfig);
	homeViewConfig.$inject = ['$stateProvider'];

	function homeViewConfig($stateProvider) {
		var state = 'elements',
			statParams = {
				url:'/elements',	
				title: 'elements',
				templateUrl: 'components/views/home/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			};
		$stateProvider.state(state, statParams);
		return;
	}



})();