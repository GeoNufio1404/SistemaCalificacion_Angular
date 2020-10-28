var db = require('../BaseDeDatos/db.config');
var PensumSistemas = {};

//Seleccionar todos 
PensumSistemas.selectAll = function(callback){
    if (db) {
        var consulta = 'SELECT * FROM PensumSistemas';
        db.query(consulta, function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Seleccionar uno
PensumSistemas.selectOne = function(id,callback){
    if (db) {
        var consulta = 'SELECT * FROM PensumSistemas where idCursoPensum = ?';
        db.query(consulta, function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado[0]);
            }
        })
    }
}

//Crear
PensumSistemas.create = function(data, callback) {
    if (db) {
        var consulta = "call sp_AgregarPensumSistemas(?,?,?,?)"
        db.query (consulta,[data.idCursoPensum,data.Curso_CodigoCurso,data.Creditos,data.Semestre],function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
PensumSistemas.edit = function(data, callback) {
    if (db) {
        var consulta = "call sp_EditarPensumSistemas(?,?,?,?)"
        db.query (consulta,[data.idCursoPensum,data.Curso_CodigoCurso,data.Creditos,data.Semestre],function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
PensumSistemas.delete = function(data, callback) {
    if (db) {
        var consulta = "call sp_EliminarPensumSistemas(?)"
        db.query (consulta,[data.idCursoPensum],function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = PensumSistemas;