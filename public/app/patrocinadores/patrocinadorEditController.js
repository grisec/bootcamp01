(function(){
	'use strict';

	angular
		.module('gdgAdmin')
		.controller('patrocinadorEditController',patrocinadorEditController)

	patrocinadorEditController.$inject = ['$scope','$state','$stateParams', 'dataService']
	
	function patrocinadorEditController($scope, $state, $stateParams, dataService){
		dataService.getEventById($stateParams.id)
			.then(function(result) {
				$scope.patrocinador = result.data;
			})
			.catch(function(error) {
				console.log(error)
			})
		
		$scope.guardarPatrocinador = function (patrocinador) {
			dataService.update(patrocinador)
				.then(function(result) {
					console.log(result)
					$state.go('patrocinador')
				})
				.catch(function(error){
					console.log(error)
				})
		}
		
	}
})()