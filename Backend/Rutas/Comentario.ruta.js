var express = require('express');
const Comentario = require('../Modelos/Comentario.Modelo');
var ComentarioModelo = require('../Modelos/Comentario.Modelo');
var ComentarioRuta = express.Router();

// Listar todos los elementos de una tabla
ComentarioRuta.get('/comentario', function (req, res) {
    ComentarioModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
ComentarioRuta.get('/comentario/:IDComentario', function (req, res) {
    var id = req.params.IDComentario;
    ComentarioModelo.selectOne(id, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
ComentarioRuta.post('/comentario', function (req, res) {
    var data = req.body;
    ComentarioModelo.create(data, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Reemplazar un nuevo elemento 
ComentarioRuta.put('/comentario/:IDComentario', function (req, res) {
    var IDComentario = req.params.IDComentario;
    var data = req.body;

    if (IDComentario == data.IDComentario) {
        ComentarioModelo.edit(data, function (resultado) {
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
ComentarioRuta.delete('/comentario/:IDComentario', function (req, res) {
    var IDComentario = req.params.IDComentario;
    ComentarioModelo.delete(IDComentario, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = ComentarioRuta;