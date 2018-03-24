(function(){
	'use strict';

	angular
		.module('gdgAdmin')
		.controller('patrocinadorController',patrocinadorController)

	patrocinadorController.$inject = ['$scope', 'dataService', '$state']
	
	function patrocinadorController($scope, dataService, $state){
		$scope.patrocinador = []
		
		activate();

		function activate(){
			dataService.getData()
				.then(function(data){
					$scope.patrocinador = data
				})
		}

		$scope.delete = function(id) {
            dataService.deletePatrocinador(id)
				.then(function (result) {
					console.log(result)
					$state.go($state.current, {}, {reload:true})
				})
				.catch(function(error) {
					console.log(error)
				})





				
			// swal({
			// 	title: "Estás seguro ?",
			// 	text: "Una vez eliminado, no puede ser recuperado",
			// 	icon: "warning",
			// 	buttons: true,
			// 	dangerMode: true,
			// })
			// 	.then((isConfirm) => {
			// 		if(isConfirm) {
			// 			dataService.deletePatrocinador(id)
			// 				.then(function (result) {
			// 					console.log(result)
			// 					$state.go($state.current, {}, {reload:true})
			// 				})
			// 				.catch(function(error) {
			// 					console.log(error)
			// 				})
			// 		} else {

			// 		}
			// 	})

			
		}
	}
}())