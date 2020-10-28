var db = require('../BaseDeDatos/db.config');
var Curso_Catedratico = {};

//Seleccionar todos 
Curso_Catedratico.selectAll = function (callback) {
    if (db) {
        var consulta = 'SELECT * FROM Curso_Catedratico';
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
Curso_Catedratico.selectOne = function (id, callback) {
    if (db) {
        var consulta = 'SELECT * FROM Curso_Catedratico where IDCatedraticoCurso = ?';
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
Curso_Catedratico.create = function (data, callback) {
    if (db) {
        var consulta = "call sp_AgregarCurso_Catedratico(?,?,?)"
        db.query(consulta, [data.IDCatedraticoCurso, data.Curso_CodigoCurso, data.Catedratico_NoCatedratico], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Editar
Curso_Catedratico.edit = function (data, callback) {
    if (db) {
        var consulta = "call sp_EditarCurso_Catedratico(?,?,?)"
        db.query(consulta, [data.IDCatedraticoCurso, data.Curso_CodigoCurso, data.Catedratico_NoCatedratico], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

//Eliminar
Curso_Catedratico.delete = function (data, callback) {
    if (db) {
        var consulta = "call sp_EliminarCurso_Catedratico(?)"
        db.query(consulta, [data.IDCatedraticoCurso], function (error, resultado) {
            if (error) {
                throw error;
            } else {
                callback(resultado);
            }
        })
    }
}

module.exports = Curso_Catedratico;