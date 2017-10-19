
(function() {
  'use strict';
  angular.module('startFrom.filter', [])
  .filter('startFrom', function() {
    return function(input, start) {         
        return input.slice(start);
    };
  });
})(); 