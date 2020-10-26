var db = require('../BaseDeDatos/db.config');
var Usuarios = {};

//Seleccionar todos
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

//Seleccionar uno
Usuarios.selectOne = function(id,callback){
    if (db) {
        var consulta = 'SELECT * FROM Usuarios where CarnetUsuario = ?';
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
Usuarios.create = function(data, callback) {
    if (db) {
        var consulta = "call sp_AgregarUsuarios(?,?,?,?,?)"
        db.query (consulta,[data.CarnetUsuario,data.NombreUsuario,data.ApellidosUsuario,data.PassUsuario,data.Correo],function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
Usuarios.edit = function(data, callback) {
    if (db) {
        var consulta = "call sp_EditarUsuarios(?,?,?,?,?)"
        db.query (consulta,[data.CarnetUsuario,data.NombreUsuario,data.ApellidosUsuario,data.PassUsuario,data.Correo],function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
Usuarios.delete = function(data, callback) {
    if (db) {
        var consulta = "call sp_EliminarUsuarios(?)"
        db.query (consulta,[data.CarnetUsuario],function(error,resultado){
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = Usuarios;