var db = require('../BaseDeDatos/db.config');
var Usuarios = {};

//Seleccionar todos 
Usuarios.selectAll = function (callback) {
    if (db) {
        var consulta = 'call sp_ListarUsuarios()';
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
Usuarios.selectOne = function (CarnetUsuario, callback) {
    if (db) {
        var consulta = 'call sp_ListarUsuario(?)';
        db.query(consulta, CarnetUsuario, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Crear
Usuarios.create = function (data, callback) {
    if (db) {
        var consulta = "call sp_AgregarUsuarios(?,?,?,?,?)"
        db.query(consulta, [data.CarnetUsuario, data.NombresUsuario, data.ApellidosUsuario, data.PassUsuario, data.Correo], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
Usuarios.edit = function (data, callback) {
    if (db) {
        var consulta = "call sp_EditarUsuarios(?,?,?,?,?)"
        db.query(consulta, [data.CarnetUsuario, data.NombresUsuario, data.ApellidosUsuario, data.PassUsuario, data.Correo], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
Usuarios.delete = function (CarnetUsuario, callback) {
    if (db) {
        var consulta = "call sp_EliminarUsuarios(?)"
        db.query(consulta, CarnetUsuario, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Validar
Usuarios.validar = function (data, callback) {
    if (db) {
        var consulta = 'SELECT * FROM usuarios WHERE CarnetUsuario = ? AND PassUsuario = ?';
        db.query(consulta, [data.CarnetUsuario,data.PassUsuario], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = Usuarios;