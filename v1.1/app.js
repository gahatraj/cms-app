(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('seedApp', [
			//CDN
			// 'ngRoute',
			'ui.router',
			'ngResource',
			'ngAnimate',
			'ui.bootstrap',
			// 'angular-google-analytics',
			'ngCookies',
			'ngAria',
			'service.api',
			'unique.filter',
			'startFrom.filter',
			'view.itemModal',

			'fac.authenticationservice',
			'fac.userservice',
			
			//LOCAL
			'view.home',
			'view.main',
			'view.admin',
			'view.login',
			'view.register'
			])
		.config(appConfig)
		.run(initialSetup);

	appConfig.$inject = ['$urlRouterProvider'];

	function appConfig($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		// AnalyticsProvider.setAccount('UA-411754-13');
		// AnalyticsProvider.setDomainName('abc.com'); //to keep all page views under a single domain on the analytics dashboard
		// if (location.href.indexOf('#') === -1)
		// 	AnalyticsProvider.ignoreFirstPageLoad(true); //this is to disable that first redirect from location/path to location/path/#/ which is hitting our bounce rates hard
		// AnalyticsProvider.useDisplayFeatures(false);
		// AnalyticsProvider.useEnhancedLinkAttribution(true);
		// AnalyticsProvider.trackPrefix(document.location.pathname + "/#"); //to make sure it attributes to the correct application path
		// // AnalyticsProvider.setPageEvent('$stateChangeSuccess'); // ONLY IF USING ui-router INSTEAD
	}

	initialSetup.$inject = ['$rootScope'//, 'Analytics'
						];

	function initialSetup($rootScope) {
		// Analytics must be injected once in order to start up automatic page tracking.
		//setup for dynamic titles through the route
		$rootScope.mainMenu = [{
			id: 0,
			name:'elements', //should be the first item from the menuList or whatever item you want to display when clicked on the button
			goesTo : 'elements' //always goes to this view
		},
		{
			id: 1,
			name:'elementstable2',
			goesTo : 'elements'
		},
		{
			id: 2,
			name:'option2',
			goesTo : 'elements'
		},
		{
			id: 3,
			name:'option3',
			goesTo : 'elements'
		}];
		
		$rootScope.mylist = []; //collects and retains the product that were selected from the product page

		$rootScope.application = "Periodic Table of Element";
		// $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
		// 	$rootScope.pageTitle = current.$$route.title;
		// });
		//in case of ui-router instead
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$rootScope.pageTitle = toParams.title;
		});
	}
})();