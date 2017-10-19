(function() {
	'use strict';

	/* Animations */

	angular.module('animation.sample', [])
		.animation('.fader', faderAnimation);

	function faderAnimation() {
		var animation = {
			beforeAddClass: beforeAddClass,
			removeClass: removeClass
		};
		return animation;
		
		function beforeAddClass(element, className, done) { //before adding ng-hide
			var attrs = angular.fromJson(element.attr('data-ng-animation')) || {};
			TweenMax.fromTo(
				element, (attrs.timeOut || attrs.time || 0.5), {
					opacity: /ng-hide/.test(className) ? 1 : 0
				}, {
					opacity: /ng-hide/.test(className) ? 0 : 1,
					onComplete: done
				}
			);
			return function(cancelled) {
				if (cancelled)
					TweenMax.killTweensOf(element);
			};
		}

		function removeClass(element, className, done) { //after removing ng-hide
			var attrs = angular.fromJson(element.attr('data-ng-animation')) || {};
			TweenMax.fromTo(
				element, (attrs.timeIn || attrs.time || 0.5), {
					opacity: /ng-hide/.test(className) ? 0 : 1
				}, {
					opacity: /ng-hide/.test(className) ? 1 : 0,
					onComplete: done
				}
			);
			return function(cancelled) {
				if (cancelled)
					TweenMax.killTweensOf(element);
			};
		}
	}
})();