(function() {
	'use strict';

	angular.module('directive.version', [])

	.directive('appVersion', versionDirective);
	
	function versionDirective() {
		var directive = {
			templateUrl: 'components/directives/version/version.html',
			scope: {}, //this is for passing items through that need to be bound to the scope of the link function
			controller: VersionController,
			controllerAs: 'dvm',
			bindToController: true, //binds the above scope variables into the controller
			link: function(scope, element, attrs, dvm) { //the link function happens after the element is made and gives easy access to the element
				//** Remove this if you do not need access to the element and/or do not need to perform actions after the element is initialized
			}
		};
		return directive;
	}
	
	VersionController.$inject = ['version'];
	function VersionController(version) { //the controller can take injections while the link function does not.  The controller happens before the element is made.
		var dvm = this;  //went with dvm for "directive view-model"   ヽ(´ー｀)ノ  PJP recommends changing these to be more descriptive, while keeping them short to not be cumbersome
		dvm.version = version;
	}
})();