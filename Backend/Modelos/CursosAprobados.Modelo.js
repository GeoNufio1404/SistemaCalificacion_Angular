var db = require('../BaseDeDatos/db.config');
var CursosAprobados = {};

//Seleccionar todos 
CursosAprobados.selectAll = function (CarneU,callback) {
    if (db) {
        var consulta = 'call sp_ListarCursosAprobados(?)';
        db.query(consulta,CarneU, function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Seleccionar uno
CursosAprobados.selectOne = function (data, callback) {
    if (db) {
        var consulta = 'call sp_ListarCursoAprobado(?,?)';
        db.query(consulta,[data.CarneU,data.CursoP], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado[0]);
            }
        })
    }
}

//Crear
CursosAprobados.create = function (data, callback) {
    if (db) {
        var consulta = "call sp_AgregarCursosAprobados(?,?,?)"
        db.query(consulta, [data.CarneU, data.CursoP, data.NotaAprobada], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
CursosAprobados.edit = function (data, callback) {
    if (db) {
        var consulta = "call sp_EditarCursosAprobados(?,?,?)"
        db.query(consulta, [data.CarneU, data.CursoP, data.NotaAprobada], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
CursosAprobados.delete = function (data, callback) {
    if (db) {
        var consulta = "call sp_EliminarCursosAprobados(?,?)"
        db.query(consulta, [data.CarneU, data.CursoP], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = CursosAprobados;