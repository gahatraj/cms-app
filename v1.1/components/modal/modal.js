(function(){
	'use strict';
	angular.module('view.itemModal',['ngRoute'])
	.controller('itemModalCtrl', itemModalCtrl);
	itemModalCtrl.$inject = ['$uibModalInstance','item'];

	function itemModalCtrl($uibModalInstance,item){
		var vm = this;
		vm.itemDetail = item;
		console.log(vm.itemDetail)
	}
	
	})();