(function(){
	'use strict';
	
	angular
		.module('gdgAdmin')
		.service('dataService', dataService)

	dataService.$inject = ['$http', 'config']
	
	function dataService($http, config) {
		this.getEntityAll = getEntityAll
		this.getEntityById = getEntityById
		this.saveEntity = saveEntity
		this.updateEntity = updateEntity
		this.deleteEntity = deleteEntity

		function getEntityAll(table, token) {
			var endpoint = '';
			switch(table) {
				case 'eventos':
					endpoint = config.serviceUrl + table
					break;
				case 'patrocinadores':
					endpoint = config.serviceUrl + table
					break;
				case 'premios':
					endpoint = config.serviceUrl + table
					break;

				default: ''
			}

			return $http.get(endpoint, {
				headers: {
					"Authorization": token
				}
			  })
				.then(function(result) {
					return result.data
				})
				.catch(function (error) {
					console.log(error)
				});
		}

		function getEntityById(table, id, token) {
			var endpoint = '';
			switch(table) {
				case 'eventos':
					endpoint = config.serviceUrl + table;
					break;
				case 'patrocinadores':
					endpoint = config.serviceUrl + table;
					break;
				case 'premios':
					endpoint = config.serviceUrl + table;
					break;

				default: ''
			}

			return $http.get(endpoint + '/' + id, {
				headers: {
					"Authorization": token
				}
			  })
				.then(function(result) {
					return result.data
				})
				.catch(function (error) {
					console.log(error)
				});
		}

		function saveEntity(table, data, token) {
			return $http.post(config.serviceUrl + table, data, {
				headers: {
					"Authorization": token
				}
			  })
		}

		function updateEntity(table, data, token) {
			return $http.put(config.serviceUrl + table + '/' + data.id, data, {
				headers: {
					"Authorization": token
				}
			  })

		}

		function deleteEntity(table, id, token) {
			return $http.delete(config.serviceUrl + table + '/' + id, {
				headers: {
					"Authorization": token
				}
			  })
		}
	}
})()