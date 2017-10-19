(function(){
	'use strict';

	angular.module('view.home')
	.controller('homeCtrl', homeCtrl);
	homeCtrl.$inject = ['$scope', '$rootScope', '$http', '$location','$timeout', '$routeParams', 'myAPI','$filter','$uibModal', 'dataService'];

	function homeCtrl($scope, $rootScope, $http, $location,$timeout,$routeParams, myAPI, $filter, $uibModal, dataService){
		var vm = this;
		vm.singleSelect;
		vm.currentItem ='';
		vm.pageSize = 24;
		vm.loadData = loadData;
		vm.loadMoreData = loadMoreData;
		vm.selectedGroup = selectedGroup;
		vm.tracNavigation = true;
		vm.showHideMenu = showHideMenu;
		vm.mainPage = mainPage;
		vm.openModal = openModal;
		vm.menuList = [
			['elements', 'element3'],
			['elementstable2','option2', 'option1'],
			['option2','bcd'],
			['option3','bcd']
		];
		
		vm.loadData();
		function loadData(index){
			vm.cLoc = $location.search().option;
			if(vm.findLocation == undefined){
				vm.dataLoading = true;
				vm.cLoc = $location.search().option;
				$location.search({'option': vm.cLoc});
				vm.recieveData = dataService.dataonload().then(function(data) {
					vm.allData = data.results;
					vm.dataLoading = false;
				})
			}
			else{
				vm.dataLoading = true;
				$location.search({'option': vm.menu[index]});
				vm.recieveData = dataService.dataonload().then(function(data) {
					vm.allData = data.results;
					vm.dataLoading = false;
				})
			}
		}


		vm.findLocation = $location.search().option;
		for(var i = 0; i < vm.menuList.length; i++){
			for(var k = 0; k < vm.menuList[i].length; k++){
				if(vm.findLocation == vm.menuList[i][k]){
					vm.menu = vm.menuList[i];
					return;
				}else{
					console.log('The option is not available')
				}
			}
		};

		function loadMoreData(){
			if(vm.pageSize >= vm.allData.length ){
				return;	
			}else{
				vm.pageSize += 24;
			}
		};
		
		function selectedGroup(selection){
			if(selection === 'All Elements'){vm.singleSelect = ''; return;}
			vm.singleSelect = selection;	
		};

		
		function showHideMenu(){
			// var navigation = document.getElementById('navigation');
			if(vm.tracNavigation){
				vm.tracNavigation = false;
			}else{
				vm.tracNavigation = true;
			}				
		}

		function mainPage(){
			$location.url($location.path('/'));
		}


		function openModal(item){
			$uibModal.open({
				templateUrl: 'components/modal/modal.html',
				controller: 'itemModalCtrl',
				controllerAs: 'vm',
				size: 'lg',
				resolve:{
					item: function(){
						return item;
					}
				}
			})
		}

	}//end of homeCtrl
})();

