// Config DataService
(function(){
    'use strict';
    angular
      .module('gdgAdmin')
      .service('dataService', dataService )
  
    dataService.$inject = ['$http']; //parametros de ui-boostrap
  
    function dataService($http){
      this.getData = getData;
      this.save = save;
      this.getEventById = getEventById;
      // no lleva parentesis porque hace referencia a la funcion upadte si ponemos parentesis guardar el resultado
      this.update = update;
      this.deleteRegistrarPremio = deleteRegistrarPremio;
  
      function getData() {
        return $http.get('http://localhost:3000/registrarPremios')
                    .then(function(result){
                        return result.data;
                    })
                    .catch(function(error){
                      console.log(error);
                    });
      }
  
      function save(data){
        return $http.post('http://localhost:3000/registrarPremios', data);
      }
  
      function getEventById (id){
        return $http.get('http://localhost:3000/registrarPremios/'+id);
      }
  
      function update(data){
        return $http.put('http://localhost:3000/registrarPremios/'+ data.id, data);
      }
  
      function deleteRegistrarPremio(id){
        return $http.delete('http://localhost:3000/registrarPremios/'+ id);
      }
    }
  })();
  