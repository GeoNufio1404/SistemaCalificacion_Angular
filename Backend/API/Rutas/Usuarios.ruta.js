var express = require('express');
const Usuarios = require('../Modelos/Usuarios.Modelo');
var UsuariosModelo = require('../Modelos/Usuarios.Modelo');
var UsuariosRuta = express.Router();

UsuariosRuta.get('/usuarios', function(req,res){
   UsuariosModelo.selectAll(function(resultado){
       if ( resultado !== undefined) {
           res.json(resultado);
       } else {
           res.json({message: 'No hay nada'});
       }
   }) 
});

module.exports = UsuariosRuta;