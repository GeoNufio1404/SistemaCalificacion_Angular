var db = require('../BaseDeDatos/db.config');
var Comentario = {};

//Seleccionar todos 
Comentario.selectAll = function (callback) {
    if (db) {
        var consulta = 'SELECT * FROM Comentario';
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
Comentario.selectOne = function (id, callback) {
    if (db) {
        var consulta = 'SELECT * FROM Comentario where IDComentario = ?';
        db.query(consulta, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado[0]);
            }
        })
    }
}

//Crear
Comentario.create = function (data, callback) {
    if (db) {
        var consulta = "call sp_AgregarComentario(?,?,?,?)"
        db.query(consulta, [data.IDComentario, data.Mensaje, data.Publicacion_IDPublicacion, data.Usuario_Carnet], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
Comentario.edit = function (data, callback) {
    if (db) {
        var consulta = "call sp_EditarComentario(?,?,?,?)"
        db.query(consulta, [data.IDComentario, data.Mensaje, data.Publicacion_IDPublicacion, data.Usuario_Carnet], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
Comentario.delete = function (data, callback) {
    if (db) {
        var consulta = "call sp_EliminarComentario(?)"
        db.query(consulta, [data.IDComentario], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = Comentario;