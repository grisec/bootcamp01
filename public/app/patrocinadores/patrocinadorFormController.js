(function(){
	'use strict';

	angular
		.module('gdgAdmin')
		.controller('patrocinadorFormController',patrocinadorFormController)

	patrocinadorFormController.$inject = ['$scope','$state','$stateParams', 'dataService']
	
	function patrocinadorFormController($scope, $state, $stateParams, dataService){
		console.log($stateParams.id)


		activate()

		function activate(){
			$scope.guardarPatrocinador = function(patrocinador) {
				dataService.save(patrocinador)
					.then(function(result) {
						console.log(result)
						$state.go('patrocinador')
					})
					.catch(function(error) {
						console.log(error)
					})
				// $scope.evento = null
			}
		}
	}
})()