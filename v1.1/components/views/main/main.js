(function(){
	'use strict';

	angular.module('view.main')
	.controller('mainCtrl', mainCtrl,);
	mainCtrl.$inject = ['$rootScope','$location','dataService'];

	function mainCtrl($rootScope, $location, dataService){
		var vm = this;
		vm.changeLocation = changeLocation;

		function changeLocation(index){
			console.log($rootScope.mainMenu[index].name);
			$location.path('/'+String($rootScope.mainMenu[index].goesTo)).search({'option':$rootScope.mainMenu[index].name});
		}
	}
})();