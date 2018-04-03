(function() {
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('logoutController', logoutController)

    logoutController.$inject = ['$scope', '$rootScope', '$state'];

    function logoutController($scope, $rootScope, $state) {
        activate();

        function activate() {
            localStorage.removeItem('identity');
            localStorage.removeItem('token');
            localStorage.clear();
            $rootScope.identity = null;
            $rootScope.token = null;
            $state.go('home');
        }
    }
})();