(function(){
	'use strict';

	angular.module('view.admin')
	.controller('adminCtrl', adminCtrl);
	adminCtrl.$inject = ['$location'];

	function adminCtrl($location){
		var vm = this;
		vm.message = "This is dataentry Page";
	}
})();