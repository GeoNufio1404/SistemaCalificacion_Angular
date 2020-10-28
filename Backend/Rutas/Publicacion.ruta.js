var express = require('express');
const Publicacion = require('../Modelos/Publicacion.Modelo');
var PublicacionModelo = require('../Modelos/Publicacion.Modelo');
var PublicacionRuta = express.Router();

// Listar todos los elementos de una tabla
PublicacionRuta.get('/publicacion', function (req, res) {
    PublicacionModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
PublicacionRuta.get('/publicacion/:IDPublicacion', function (req, res) {
    var id = req.params.IDPublicacion;
    PublicacionModelo.selectOne(id, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
PublicacionRuta.post('/publicacion', function (req, res) {
    var data = req.body;
    PublicacionModelo.create(data, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Reemplazar un nuevo elemento 
PublicacionRuta.put('/publicacion/:IDPublicacion', function (req, res) {
    var IDPublicacion = req.params.IDPublicacion;
    var data = req.body;

    if (IDPublicacion == data.IDPublicacion) {
        PublicacionModelo.edit(data, function (resultado) {
            if (resultado.affectedRows > 0) {
                res.json(resultado);
            } else {
                res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
            }
        });
    } else {
        res.json({ 'Mensaje': 'No son el mismo id' });
    }
});

// Eliminar un elemento
PublicacionRuta.delete('/publicacion/:IDPublicacion', function (req, res) {
    var IDPublicacion = req.params.IDPublicacion;
    PublicacionModelo.delete(IDPublicacion, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = PublicacionRuta;