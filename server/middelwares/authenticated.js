'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';

exports.ensureAuth = function(req, res, next) {
    console.log("autorization:"+req.headers.authorization);
    
    if (!req.headers.authorization) {
        return res.status(403).send('La petición no tiene la cabecera de autentificación');
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, secret);
        
        if (payload.exp <= moment().unix()) {
            return res.status(401).send('El token ha expirado');
        }
    } catch (ex) {
        console.log(ex);
        return res.status(404).send('Token no válido');
    }

    req.usuario = payload;

    next();
};