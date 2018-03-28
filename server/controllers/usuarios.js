Usuario = require('../models').Usuario;

module.exports = {
    uploadImagen(req, res){
        var id = req.params.id;
        var fileName = "No subido...";

        if (req.files) {
            var filePath = req.files.imagen.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[2];
            console.log(filePath);
            console.log(fileName);

            //usar Usuario.findByIdAndUpdate(id, {imagen: fileName}) {};
            
            
        } else {
            res.status(200).send("No se ha subido ninguna imagen...");
        }
    }
};