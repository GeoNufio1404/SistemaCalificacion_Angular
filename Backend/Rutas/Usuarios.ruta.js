var express = require('express');
const Usuarios = require('../Modelos/Usuarios.Modelo');
var UsuariosModelo = require('../Modelos/Usuarios.Modelo');
var UsuariosRuta = express.Router();

//Listar todos los elementos de una tabla http://127.0.0.1:4000/api/usuarios
UsuariosRuta.get('/usuarios', function (req, res) {
    UsuariosModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ message: 'No hay nada' });
        }
    })
});

//Listar un elemento especifico
UsuariosRuta.get('/usuarios/:CarnetUsuario', function (req, res) {
    var id = req.params.CarnetUsuario;
    UsuariosModelo.selectOne(id, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ message: 'No hay nada' });
        }
    });
});

//Crear un nuevo elemento 
UsuariosRuta.post('/usuarios', function (req, res) {
    var data = req.body;
    UsuariosModelo.create(data, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta accion' });
        }
    });
});

//Reemplazar un nuevo elemento 
UsuariosRuta.put('/usuarios/:CarnetUsuario', function (req, res) {
    var CarnetUsuario = req.params.CarnetUsuario;
    var data = req.body;

    if (CarnetUsuario == data.CarnetUsuario) {
        UsuariosModelo.edit(data, function (resultado) {
            if (resultado.affectedRows > 0) {
                res.json(resultado);
            } else {
                res.json({ 'Mensaje': 'No se pudo realizar esta accion' });
            }
        });
    } else {
        res.json({ 'Mensaje': 'No son el mismo id' });
    }
});

//Eliminar un elemento
UsuariosRuta.delete('/usuarios/:CarnetUsuario', function (req, res) {
    var CarnetUsuario = req.params.CarnetUsuario;
    UsuariosModelo.delete(CarnetUsuario, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta accion' });
        }
    })
});

//Login (solo para esta tabla usuarios)
UsuariosRuta.get('/usuarios/:CarnetUsuario, :PassUsuario', function (req, res) {
    var CarnetUsuario = req.params.CarnetUsuario;
    var PassUsuario = req.params.PassUsuario;
    UsuariosModelo.Validar(CarnetUsuario, PassUsuario, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ "mensaje": "No hay para validar(login)" })
        }
    })
});

module.exports = UsuariosRuta;