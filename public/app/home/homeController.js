(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('homeController', homeController)

    homeController.$inject = ['$location'];

    function homeController($location) {
        var vm = this;

        activate();

        function activate() { }
    }
})();