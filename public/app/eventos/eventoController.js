(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventoController', eventoController);

    eventoController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'dataService'];

    function eventoController($scope, $rootScope, $state, $stateParams, dataService) {
        var vm = this;
        vm.evento = {};
        vm.table_name = 'eventos';
        var token = $rootScope.token;
        activate();
        
        vm.submitEvento = function () {
            if ($state.current.name == 'form-evento-create') {
                return dataService.saveEntity(vm.table_name, vm.evento, token)
                    .then(function (result) {
                        $state.go('eventos');
                    });
            } else {
                return dataService.updateEntity(vm.table_name, vm.evento, token)
                    .then(function (result) {
                        $state.go('eventos');
                    });
            } 
        }

        function getEventoById () {
            return dataService.getEntityById(vm.table_name, $stateParams.id, token)
            .then(function (evento) {
                return evento;
            });
        }

        vm.deleteEvento = function(id) {
            return dataService.deleteEntity(vm.table_name, id, token)
                .then(function (result) {
                    $state.go('eventos');
                });
        }

        vm.cancelar = function() {
            $state.go('eventos');
        }

        function activate() {
            if ($state.current.name == 'form-evento-edit') {
                getEventoById()
                .then(function(evento) {
                    vm.evento = evento;
                });
            } else {
                vm.evento = {
                    nombre:'',
                    descripcion:'',
                    direccion:''
                };
            }
        }  
    }
})();