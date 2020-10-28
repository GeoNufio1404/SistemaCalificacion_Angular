var express = require('express');
const Curso_Catedratico = require('../Modelos/Curso_Catedratico.Modelo');
var Curso_CatedraticoModelo = require('../Modelos/Curso_Catedratico.Modelo');
var Curso_CatedraticoRuta = express.Router();

// Listar todos los elementos de una tabla
Curso_CatedraticoRuta.get('/curso_catedratico', function (req, res) {
    Curso_CatedraticoModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
Curso_CatedraticoRuta.get('/curso_catedratico/:IDCatedraticoCurso', function (req, res) {
    var id = req.params.IDCatedraticoCurso;
    Curso_CatedraticoModelo.selectOne(id, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
Curso_CatedraticoRuta.post('/Curso_Catedratico', function (req, res) {
    var data = req.body;
    Curso_CatedraticoModelo.create(data, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    });
});

// Reemplazar un nuevo elemento 
Curso_CatedraticoRuta.put('/Curso_Catedratico/:IDCatedraticoCurso', function (req, res) {
    var IDCatedraticoCurso = req.params.IDCatedraticoCurso;
    var data = req.body;

    if (IDCatedraticoCurso == data.IDCatedraticoCurso) {
        Curso_CatedraticoModelo.edit(data, function (resultado) {
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
Curso_CatedraticoRuta.delete('/Curso_Catedratico/:IDCatedraticoCurso', function (req, res) {
    var IDCatedraticoCurso = req.params.IDCatedraticoCurso;
    Curso_CatedraticoModelo.delete(IDCatedraticoCurso, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    })
});


module.exports = Curso_CatedraticoRuta;