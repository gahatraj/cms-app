(function() {
	'use strict';

	angular.module('filter.interpolate', [])

	.filter('interpolate', interpolateFilter);
	interpolateFilter.$inject = ['version'];

	function interpolateFilter(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}
})();