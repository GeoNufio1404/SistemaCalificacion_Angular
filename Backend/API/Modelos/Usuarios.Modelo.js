var db = require('../BaseDeDatos/db.config');
var Usuarios = {};

Usuarios.selectAll = function(callback){
    if (db) {
        var consulta = 'SELECT * FROM Usuarios';
        db.query(consulta, function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = Usuarios;