var express = require ('express');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

var port = 4000;
var app = express();

//Cargar Rutas
const UsuariosRuta = require('./Rutas/Usuarios.ruta');
const CatedraticoRuta = require('./Rutas/Catedratico.ruta');
const ComentarioRuta = require('./Rutas/Comentario.ruta');
const CursoCatedraticoRuta = require('./Rutas/Curso_Catedratico.ruta');
const CursoRuta = require('./Rutas/Curso.ruta');
const CursosAprobadosRuta = require('./Rutas/CursosAprobados.ruta');
const PensumSistemasRuta = require('./Rutas/PensumSistemas.ruta');
const PublicacionRuta = require('./Rutas/Publicacion.ruta');

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(multipart());

//Configuracion de Headers y Cores
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE ');
    res.setHeader('Custom-Header','Own-Data');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With-Method-Override,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

//rutas base
app.use('/api/',UsuariosRuta);
app.use('/api/',CatedraticoRuta);
app.use('/api/',ComentarioRuta);
app.use('/api/',CursoCatedraticoRuta);
app.use('/api/',CursoRuta);
app.use('/api/',CursosAprobadosRuta);
app.use('/api/',PensumSistemasRuta);
app.use('/api/',PublicacionRuta);

//Iniciar Puerto
app.listen(port);
console.log("Servidor Sistema de Calificaciones Iniciado Correctamente!");