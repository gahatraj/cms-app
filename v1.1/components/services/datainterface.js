'use strict'; 

angular.module('service.api', ['ngResource'])
.factory('myAPI', ['$resource', function($resource){
    return $resource('api',{},{
    	getElements: {
    		method: 'GET',
    		cache: 'true',
        	url: 'api/api.php?args=/getElements/true/product/:product',
            params: {
            	product :'@product'	
            }
    	}
    });
}]);


