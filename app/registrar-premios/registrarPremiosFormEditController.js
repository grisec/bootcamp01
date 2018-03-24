(function(){
    'use strict';
    angular
      .module('gdgAdmin')
      .controller('registrarPremiosFormEditController', registrarPremiosFormEditController )
  
      registrarPremiosFormEditController.$inject = ['$scope','$state', '$stateParams', 'dataService']; //parametros de ui-boostrap
  
    function registrarPremiosFormEditController($scope, $state, $stateParams, dataService){
      dataService.getEventById($stateParams.id)
        .then(function(result){
          $scope.registrarPremio = result.data;
        })
        .catch(function(err){
          console.log(err);
        });
  
        $scope.actualizarPremio = function(registrarPremio){
          console.log(registrarPremio);
          dataService.update(registrarPremio)
            .then(function(result){
              console.log(result);
              // sistema de manejador de ui-route
              $state.go('registrarPremios');
            })
            .catch(function(err){
              console.log(err);
            })
        }
      }
  })();
  