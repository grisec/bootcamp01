var registrarPremio = require('../models').registrarPremio;

module.exports = {
    //lista de premios
    
    //GET
    index(req,res) {
        registrarPremio.findAll()
        .then(function(registrarPremios){
            //this is a promise
            res.status(200).json(registrarPremios);
        })
        .catch(function(error){
            //in case of errors 
            res.status(500).json(error);
        });
    },

    //GET
    show(req, res){
        registrarPremio.findById(req.params.id, {})
        .then(function(registrarPremio){
            res.status(200).json(registrarPremio);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },

    //POST
    create(req,res){
        registrarPremio.create(req.body)
        .then(function(registrarPremio){
            res.status(200).json(registrarPremio);
        })
        .catch(function(error){
            res.status(500).json(error);
        });        
    },

    //PUT
    update(req,res){
        registrarPremio.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        .then(function(registrarPremio){
            res.status(200).json(registrarPremio);
        })
        .catch(function(error){
            res.status(500).json(error);
        });   
    },
    delete(req,res){
        registrarPremio.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(function(registrarPremio){
            res.status(200).json(registrarPremio);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }


};