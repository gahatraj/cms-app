(function(){
	'use strict';

	angular.module('view.admin', ['ui.router'])

	.config(adminConfig);
	adminConfig.$inject = ['$stateProvider'];

	function adminConfig($stateProvider) {
		var state = 'admin',
			statParams = {
				ulr:'/admin',
				title: 'admin',
				templateUrl: 'components/views/admin/admin.html',
				controller: 'adminCtrl',
				controllerAs: 'vm'
			};
		$stateProvider.state(state, statParams);
		return;
	}

})();

