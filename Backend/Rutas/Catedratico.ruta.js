var express = require('express');
const Catedratico = require('../Modelos/Catedratico.Modelo');
var CatedraticoModelo = require('../Modelos/Catedratico.Modelo');
var CatedraticoRuta = express.Router();

// Listar todos los elementos de una tabla
CatedraticoRuta.get('/catedratico', function (req, res) {
    CatedraticoModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
CatedraticoRuta.get('/catedratico/:NoCatedratico', function (req, res) {
    var id = req.params.NoCatedratico;
    CatedraticoModelo.selectOne(id, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
CatedraticoRuta.post('/catedratico', function (req, res) {
    var data = req.body;
    CatedraticoModelo.create(data, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Reemplazar un nuevo elemento 
CatedraticoRuta.put('/catedratico/:NoCatedratico', function (req, res) {
    var NoCatedratico = req.params.NoCatedratico;
    var data = req.body;

    if (NoCatedratico == data.NoCatedratico) {
        CatedraticoModelo.edit(data, function (resultado) {
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
CatedraticoRuta.delete('/catedratico/:NoCatedratico', function (req, res) {
    var NoCatedratico = req.params.NoCatedratico;
    CatedraticoModelo.delete(NoCatedratico, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = CatedraticoRuta;
