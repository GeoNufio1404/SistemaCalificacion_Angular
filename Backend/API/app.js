var express = require ('express');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

var port = 4000;
var app = express();

//Cargar Rutas


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
app.use('/api/',UsuariosRoute);

//Iniciar Puerto
app.listen(port);
console.log("Servidor Proyecto Iniciado Correctamente!");