(function() {
	'use strict';
	angular.module('service.factorySample', [])
		.factory('factory', factorySampleFactory);
	factorySampleFactory.$inject = [];

	function factorySampleFactory() {
		//you can pass back local variables and update them in functions to make parameters that can get shared through the service to everywhere that may need it, these need to be declared before the return.
		var localVariable = {}; // keep these variables in objects so they get bound by reference to the service and they get updated everywhere they are injected
		var service = { //attribute waht you want to be able to call in your controllers to this service and then return it
			localVariable: localVariable,
			sample: sample
		};
		return service;

		//functions get hoisted so they are accessible even though they are after the return
		function sample() {
			localVariable.someWork = "do";
			localVariable.someFun = "have";
		}
	}
})();