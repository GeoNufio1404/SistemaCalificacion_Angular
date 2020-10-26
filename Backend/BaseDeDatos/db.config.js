
var mysql = require('mysql');

//Parametros para la conexion con la base de datos
var parametros = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_proyecto'
}

var conexion = mysql.createConnection(parametros);

module.exports = conexion;