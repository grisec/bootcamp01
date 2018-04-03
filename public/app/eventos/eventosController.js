(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosController', eventosController);

    eventosController.$inject = ['$scope', '$rootScope', 'dataService'];

    function eventosController($scope, $rootScope, dataService) {
        var vm = this;
        vm.eventos = [];
        vm.table_name = 'eventos';
        var token = $rootScope.token;
        
        activate();

        function getEventos() {
            return dataService.getEntityAll(vm.table_name, token)
            .then(function (result) {
                return result;
            });
        }

        vm.deleteEvento = function (id) {
            return dataService.deleteEntity(vm.table_name, id, token)
            .then(function (result) {
                activate();
            });
        }

        function activate() {
            getEventos()
            .then(function (result) {
                vm.eventos = result;
            });
        }
    }
})();