var db = require('../BaseDeDatos/db.config');
var Publicacion = {};

//Seleccionar todos 
Publicacion.selectAll = function (callback) {
    if (db) {
        var consulta = 'call sp_ListarPublicaciones()';
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
Publicacion.selectOne = function (id, callback) {
    if (db) {
        var consulta = 'call sp_ListarPublicacion(?)';
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
Publicacion.create = function (data, callback) {
    if (db) {
        var consulta = "call sp_AgregarPublicacion(?,?,?,?,?,?,?,?)"
        db.query(consulta, [data.IDPublicacion, data.mensaje, data.Usuario_Carnet, data.Fecha, data.Curso_Catedratico_idCatedratico, data.Curso_CodigoCurso, data.Catedratico_NoCatedratico, data.Tipo], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
Publicacion.edit = function (data, callback) {
    if (db) {
        var consulta = "call sp_EditarPublicacion(?,?,?,?,?,?,?,?)"
        db.query(consulta, [data.IDPublicacion, data.mensaje, data.Usuario_Carnet, data.Fecha, data.Curso_Catedratico_idCatedratico, data.Curso_CodigoCurso, data.Catedratico_NoCatedratico, data.Tipo], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
Publicacion.delete = function (IDPublicacion, callback) {
    if (db) {
        var consulta = "call sp_EliminarPublicacion(?)"
        db.query(consulta, IDPublicacion, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = Publicacion;