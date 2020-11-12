var express = require('express');
const CursosAprobados = require('../Modelos/CursosAprobados.Modelo');
var CursosAprobadosModelo = require('../Modelos/CursosAprobados.Modelo');
var CursosAprobadosRuta = express.Router();

//Listar todos los elementos de una tabla 
CursosAprobadosRuta.get('/cursosaprobados/:CarnetU', function (req, res) {
    CursosAprobadosModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ message: 'No hay nada' });
        }
    })
});

//Listar un elemento especifico
CursosAprobadosRuta.get('/cursosaprobados/:CarnetU', function (req, res) {
    var id = req.params.CarnetU;
    var data = req.body;
    data.CarnetU = id;
    CursosAprobadosModelo.selectOne(data, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } else {
            res.json({ message: 'No hay nada' });
        }
    });
});

//Crear un nuevo elemento 
CursosAprobadosRuta.post('/cursosaprobados', function (req, res) {
    var data = req.body;
    CursosAprobadosModelo.create(data, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta accion' });
        }
    });
});

//Reemplazar un nuevo elemento 
CursosAprobadosRuta.put('/cursosaprobados/:CarnetU', function (req, res) {
    var CarnetU = req.params.CarnetU;
    var data = req.body;

    if (CarnetU == data.CarnetU) {
        CursosAprobadosModelo.edit(data, function (resultado) {
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
CursosAprobadosRuta.delete('/cursosaprobados/:CarnetU', function (req, res) {
    var CarnetU = req.params.CarnetU;
    CursosAprobadosModelo.delete(CarnetU, function (resultado) {
        if (resultado.affectedRows > 0) {
            res.json(resultado);
        } else {
            res.json({ 'Mensaje': 'No se pudo realizar esta accion' });
        }
    })
});

module.exports = CursosAprobadosRuta;