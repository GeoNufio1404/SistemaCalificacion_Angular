var db = require('../BaseDeDatos/db.config');
var Curso = {};

//Seleccionar todos 
Curso.selectAll = function (callback) {
    if (db) {
        var consulta = 'call sp_ListarCursos()';
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
Curso.selectOne = function (id, callback) {
    if (db) {
        var consulta = 'call sp_ListarCurso(?)';
        db.query(consulta,id , function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado[0]);
            }
        })
    }
}

//Crear
Curso.create = function (data, callback) {
    if (db) {
        var consulta = "call sp_AgregarCurso(?,?)"
        db.query(consulta, [data.CodigoCurso, data.Nombre], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
Curso.edit = function (data, callback) {
    if (db) {
        var consulta = "call sp_EditarCurso(?,?)"
        db.query(consulta, [data.CodigoCurso, data.Nombre], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
Curso.delete = function (CodigoCurso, callback) {
    if (db) {
        var consulta = "call sp_EliminarCurso(?)"
        db.query(consulta, CodigoCurso, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = Curso;