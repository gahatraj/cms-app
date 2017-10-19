'use strict';
angular
.module('userservice.api', ['ngResource'])
.factory('userServices', ['$resource', function($resource){
	return $resource('api',{},{
	    getAllData: {
    		method: 'GET',
        	url: 'api/api.php?args=/getAllData/true',
            params: {
                table :'@table'
            }
    	},
    	GetById: {
    		method: 'GET',
        	url: 'api/api.php?args=/getAllData/true/table/:table',
            params: {
                table :'@table'
            }
    	}
    	,GetByUsername: {
    		method: 'GET',
        	url: 'api/api.php?args=/getAllData/true/table/:table',
            params: {
                table :'@table'
            }
    	}
    	,Create:{
    		method: 'POST',
        	url: 'api/api.php?args=/createnewuser/true/username/:username/password/:password',
            params: {
                username: '@username',
                password: '@userpassword'
            }
    	}
    	,Update: {
    		method: 'GET',
        	url: 'api/api.php?args=/getAllData/true/table/:table',
            params: {
                table :'@table'
            }
    	}
    	,Delete: {
    		method: 'GET',
        	url: 'api/api.php?args=/getAllData/true/table/:table',
            params: {
                table :'@table'
            }
    	}
    	,GetAll: {
    		method: 'GET',
        	url: 'api/api.php?args=/getAllData/true/table/:table',
            params: {
                table :'@table'
            }
    	}

    	// private functions

	    // function handleSuccess(res) {
	    //     return res.data;
	    // }

	    // function handleError(error) {
	    //     return function () {
	    //         return { success: false, message: error };
	    //     };
	    // }

	});
}]);


