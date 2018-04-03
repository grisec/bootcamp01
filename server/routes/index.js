var eventos = require('../controllers/eventos');
var patrocinador = require('../controllers/patrocinadores');
var login = require('../controllers/login');
var md_auth = require('../middelwares/authenticated');

// Todas las rutas de la aplicacion deben ser definidos en este archivo
module.exports = function(router) {
    // Eventos
    router.get('/eventos', md_auth.ensureAuth, eventos.index);
    router.get('/eventos/:id', md_auth.ensureAuth, eventos.show);
    router.post('/eventos', md_auth.ensureAuth, eventos.create);
    router.put('/eventos/:id', md_auth.ensureAuth, eventos.update);
    router.delete('/eventos/:id', md_auth.ensureAuth, eventos.delete);

    // Patrocinadores
    router.get('/patrocinador', patrocinador.index);
    router.get('/patrocinador/:id', patrocinador.show);
    router.post('/patrocinador', patrocinador.create);
    router.put('/patrocinador/:id', patrocinador.update);
    router.delete('/patrocinador/:id', patrocinador.delete);
    // Workshops

    // Login
    router.post('/login', login.loginUsuario);

    //Otros

    return router;
};