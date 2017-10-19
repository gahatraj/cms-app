(function () {
    'use strict';
 
    angular
        .module('view.register')
        .controller('RegisterController', RegisterController);
 
    RegisterController.$inject = ['UserService', '$location', '$rootScope'];
    function RegisterController(UserService, $location, $rootScope) {
        var vm = this;

        vm.register = register;
        function register() {
            UserService.Create({
                userdata : vm.user
            }, function(){$location.path('/login')})
        }
    }
 
})();



