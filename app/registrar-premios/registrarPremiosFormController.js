(function(){
  'use strict';
  angular
    .module('gdgAdmin')
    .controller('registrarPremiosFormController', registrarPremiosFormController )

    registrarPremiosFormController.$inject = ['$scope','$state', '$stateParams', 'dataService']; //parametros de ui-boostrap

  function registrarPremiosFormController($scope, $state, $stateParams, dataService){
    $scope.crearPremio = function (registrarPremio) {
      console.log($stateParams.id);
    /*  console.log(registrarPremio);
      $scope.registrarPremio = null;*/
      dataService.save(registrarPremio)
        .then(function(result){
          console.log(result);
          $state.go('registrarPremios');
        })
        .catch(function(err){
            console.log(err);
        })
    }



  }
})();
