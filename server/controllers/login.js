Usuario = require('../models').Usuario;
var jwt = require('../services/jwt');


module.exports = {
  loginUsuario(req, res) {
      
    var params = req.body;
    var email = params.email;
    var clave = params.clave;
    Usuario.findOne({
        where: {
            email: email.toString().toLowerCase()
        }
    })
    .then(function (usuario) {
        if (!usuario) {
            res.status(404).json("El usuario no existe");
        } else {
            if (usuario.clave !== clave) {
                res.status(404).json("La clave no es correcta");
            } else {
                //Devolver los datos del usuario logueado           
                if (params.gethash) {
                  //Devolver un token de jwt
                  res.status(200).json({
                    token: jwt.createToken(usuario),
                    usuario: usuario
                  });
                } else {
                  res.status(200).json(usuario);
                }
            }
        }
    })
    .catch(function (error) {
        res.status(500).json(error);
    });
  }
};