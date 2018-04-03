'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';

exports.createToken = function(usuario) {
    var payload = {
        sub: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        nivel: usuario.nivel,
        imagenUrl: usuario.imagenUrl,
        iat: moment().unix,
        exp: moment().add(30, 'days').unix
    };
    return jwt.encode(payload, secret);
};