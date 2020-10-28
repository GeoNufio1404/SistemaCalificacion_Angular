var express = require('express');
const Catedratico = require('../Modelos/Catedratico.Modelo');
var CatedraticoModelo = require('../Modelos/Catedratico.Modelo');
var CatedraticoRuta = express.Enrutador();

// Listar todos los elementos de una tabla
CatedraticoRuta.get('/ catedratico', function (req, res) {
    CatedraticoModelo.selectAll(function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } más  {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
CatedraticoRuta.get('/ catedratico /: NoCatedratico', function (req, res) {
    var id = req.params.NoCatedratico;
    CatedraticoModelo.selectOne(id, function (resultado) {
        if (resultado !== undefined) {
            res.json(resultado);
        } más {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
CatedraticoRuta.post('/ catedratico', function (req, res) {
    var data = req.body;
    CatedraticoModelo.crear(datos, función(resultado) {
        si(m resultado.affectedRows > 0 ) {
        res.json(resultado);
    } más  {
        res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
    }
});
} );

// Reemplazar un nuevo elemento 
CatedraticoRuta.put('/ catedratico /: NoCatedratico', function (req, res) {
    var NoCatedratico = req.params.NoCatedratico;
    var data = req.el cuerpo;

    if (NoCatedratico == data.NoCatedratico) {
        CatedraticoModelo.editar(datos, función(resultado) {
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
CatedraticoRuta.delete('/ catedratico /: NoCatedratico', function (req, res) {
    var NoCatedratico = req.params.NoCatedratico;
    CatedraticoModelo.eliminar(NoCatedratico, función(resultado) {
        si(m resultado .affectedRows > 0 ) {
        res.json(resultado);
    } más  {
        res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
    }
})
} );

módulo.exportaciones = CatedraticoRuta;
