var express = require('express');
const Curso = require('../Modelos/Curso.Modelo');
var CursoModelo = require('../Modelos/Curso.Modelo');
var CursoRuta = express.Router();

// Listar todos los elementos de una tabla
CursoRuta.get('/curso', function (req, res) {
    CursoModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
CursoRuta.get('/curso/:CodigoCurso', function (req, res) {
    var id = req.params.CodigoCurso;
    CursoModelo.selectOne(id, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
CursoRuta.post('/curso', function (req, res) {
    var data = req.body;
    CursoModelo.create(data, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Reemplazar un nuevo elemento 
CursoRuta.put('/curso/:CodigoCurso', function (req, res) {
    var CodigoCurso = req.params.CodigoCurso;
    var data = req.body;

    if (CodigoCurso == data.CodigoCurso) {
        CursoModelo.edit(data, function (resultado) {
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
CursoRuta.delete('/curso/:CodigoCurso', function (req, res) {
    var CodigoCurso = req.params.CodigoCurso;
    CursoModelo.delete(CodigoCurso, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});

module.exports = CursoRuta;