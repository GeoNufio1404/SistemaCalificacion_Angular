var db = require('../BaseDeDatos/db.config');
var Catedratico = {};

//Seleccionar todos 
Catedratico.selectAll = function (callback) {
    if (db) {
        var consulta = 'call sp_ListarCatedraticos()';
        db.query(consulta, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Seleccionar uno
Catedratico.selectOne = function (id, callback) {
    if (db) {
        var consulta = 'call sp_ListarCatedratico(?)';
        db.query(consulta,id, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado[0]);
            }
        })
    }
}

//Crear
Catedratico.create = function (data, callback) {
    if (db) {
        var consulta = "call sp_AgregarCatedratico(?,?,?)"
        db.query(consulta, [data.NoCatedratico, data.Nombres, data.Apellidos], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
Catedratico.edit = function (data, callback) {
    if (db) {
        var consulta = "call sp_EditarCatedratico(?,?,?)"
        db.query(consulta, [data.NoCatedratico, data.Nombres, data.Apellidos], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
Catedratico.delete = function (NoCatedratico, callback) {
    if (db) {
        var consulta = "call sp_EliminarCatedratico(?)"
        db.query(consulta, NoCatedratico, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = Catedratico;