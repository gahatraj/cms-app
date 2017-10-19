function dataService(myAPI, $location, $http){
	var vm = this;
	this.dataonload = function (){
		vm.currentItem = $location.search().option;
		return $http({
		  method: 'GET',
          url: 'api/api.php?args=/getElements/true/product/'+vm.currentItem
		}).then(function successCallback(response) {
			return response.data;
		}, function errorCallback(response) {
			return response;
		});
	};
}

angular
	.module('seedApp')
	.service('dataService', dataService)