var express = require('express');
const PensumSistemas = require('../Modelos/PensumSistemas.Modelo');
var PensumSistemasModelo = require('../Modelos/PensumSistemas.Modelo');
var PensumSistemasRuta = express.Enrutador();

// Listar todos los elementos de una tabla
PensumSistemasRuta.get('/ pensumsistemas', function (req, res) {
    PensumSistemasModelo.selectAll(function (resultado) {
        if (resultado! == undefined) {
            res.json(resultado);
        } más  {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
PensumSistemasRuta.get('/ pensumsistemas /: idCursoPensum', function (req, res) {
    var id = req.params.idCursoPensum;
    PensumSistemasModelo.selectOne(id, function (resultado) {
        if (resultado! == undefined) {
            res.json(resultado);
        } más {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
PensumSistemasRuta.post('/ pensumsistemas', function (req, res) {
    var data = req.el cuerpo;
    PensumSistemasModelo.crear(datos, función(resultado) {
        si(m resultado .affectedRows > 0 ) {
        res.json(resultado);
    } más  {
        res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
    }
});
} );

// Reemplazar un nuevo elemento 
PensumSistemasRuta.put('/ pensumsistemas /: idCursoPensum', function (req, res) {
    var idCursoPensum = req.params.idCursoPensum;
    var data = req.el cuerpo;

    if (idCursoPensum == data.idCursoPensum) {
        PensumSistemasModelo.editar(datos, función(resultado) {
            si(m resultado .affectedRows > 0 ) {
            res.json(resultado);
        } más  {
            res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
        }
    } );
    } más {
    res.json({ 'Mensaje': 'No son el mismo id' });
}   
} );

// Eliminar un elemento
PensumSistemasRuta.delete('/ pensumsistemas /: idCursoPensum', function (req, res) {
    var idCursoPensum = req.params.idCursoPensum;
    PensumSistemasModelo.eliminar(idCursoPensum, función(resultado) {
        si(m resultado .affectedRows > 0 ) {
        res.json(resultado);
    } más  {
        res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
    }
})
} );


módulo.exportaciones = PensumSistemasRuta;