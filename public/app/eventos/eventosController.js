(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosController', eventosController);

    eventosController.$inject = ['$scope', 'dataService'];

    function eventosController($scope, dataService) {
        var vm = this;
        vm.eventos = [];
        vm.table_name = 'eventos';
        activate();

        function getEventos() {
            return dataService.getEntityAll(vm.table_name)
            .then(function (result) {
                return result;
            });
        }

        vm.deleteEvento = function (id) {
            return dataService.deleteEntity(vm.table_name, id)
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