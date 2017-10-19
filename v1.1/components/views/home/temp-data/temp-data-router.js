// (function(){
	'use strict';

	angular.module('view.home')

	.config(tempdataConfig);
	tempdataConfig.$inject = ['$stateProvider'];

	function tempdataConfig($stateProvider) {
		var state = 'elements.tempdata',
			statParams = {
				url:'/tempdata',
				templateUrl: 'components/views/home/product-view.html',
				controller:'homeCtrl',
				controllerAs:'vm'
			};
		$stateProvider.state(state, statParams);
		return;
	}



// })();