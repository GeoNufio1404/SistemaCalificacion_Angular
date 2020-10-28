var express = require('express');
const PensumSistemas = require('../Modelos/PensumSistemas.Modelo');
var PensumSistemasModelo = require('../Modelos/PensumSistemas.Modelo');
var PensumSistemasRuta = express.Router();

// Listar todos los elementos de una tabla
PensumSistemasRuta.get('/pensumsistemas', function (req, res) {
    PensumSistemasModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
PensumSistemasRuta.get('/pensumsistemas/:idCursoPensum', function (req, res) {
    var id = req.params.idCursoPensum;
    PensumSistemasModelo.selectOne(id, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
PensumSistemasRuta.post('/pensumsistemas', function (req, res) {
    var data = req.body;
    PensumSistemasModelo.create(data, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Reemplazar un nuevo elemento 
PensumSistemasRuta.put('/pensumsistemas/:idCursoPensum', function (req, res) {
    var idCursoPensum = req.params.idCursoPensum;
    var data = req.body;

    if (idCursoPensum == data.idCursoPensum) {
        PensumSistemasModelo.edit(data, function (resultado) {
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
PensumSistemasRuta.delete('/pensumsistemas/:idCursoPensum', function (req, res) {
    var idCursoPensum = req.params.idCursoPensum;
    PensumSistemasModelo.delete(idCursoPensum, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});


module.exports = PensumSistemasRuta;