var patrocinadores = require('../../server/models').patrocinadores

module.exports = {
	//Lista de eventos
	index(request, response) {

		patrocinadores.findAll()
		.then(function(patrocinadores) {
			response.status(200).json(patrocinadores)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	},
	//retornar un evento
	show(request, response) {
		patrocinadores.findById(request.params.id,{})
		.then(function(patrocinadores) {
			response.status(200).json(patrocinadores)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	},

	create(request, response) {
		patrocinadores.create(request.body)
		.then(function(patrocinadores) {
			response.status(200).json(patrocinadores)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	},

	update(request, response) {
		patrocinadores.update(request.body, {
			where: {
				id: request.params.id
			}
		})
		.then(function(patrocinadores) {
			response.status(200).json(patrocinadores)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	},

	delete(request, response) {
		patrocinadores.destroy({
			where: {
				id: request.params.id
			}
		})
		.then(function(patrocinadores) {
			response.status(200).json(patrocinadores)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	}
}