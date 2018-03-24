var eventos = require('../controllers/eventos');
var registrarPremios = require('../controllers/registrarPremio');

// Todas las rutas de la aplicacion deben ser definidos en este archivo

module.exports = function(router) {
    // Eventos
    router.get('/eventos', eventos.index);
    router.get('/eventos/:id', eventos.show);
    router.post('/eventos', eventos.create);
    router.put('/eventos/:id', eventos.update);
    router.delete('/eventos', eventos.delete);
    
    // Registrar Premios
    //listar todos
    router.get('/registrarPremios',registrarPremios.index);
    //listar por id
    router.get('/registrarPremios/:id',registrarPremios.show);
    //Crear un nuevo premio
    router.post('/registrarPremios',registrarPremios.create);
    //Modificar un premio
    router.put('/registrarPremios/:id',registrarPremios.update);
    //Eliminar un premio
    router.delete('/registrarPremios/:id',registrarPremios.delete);

    // Ciudad

    //Workshops

    //Otros

    return router;
};