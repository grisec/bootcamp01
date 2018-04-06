(function(){
    'use strict';
    angular
      .module('gdgAdmin')
      .controller('registrarPremiosController', registrarPremiosController );
  
      registrarPremiosController.$inject = ['$scope', 'dataService','$state']; //parametros de ui-boostrap
  
    function registrarPremiosController($scope, dataService, $state){
  
      $scope.registrarPremios = []
  
         dataService.getData()
         .then(function (data){
           $scope.registrarPremios = data;
         });
  
         $scope.delete = function(id){
           dataService.deleteRegistrarPremio(id)
           .then(function(result){
             console.log(result);
             $state.go($state.current, {},{reload:true});
            });
          }
    }
  
  })();
  