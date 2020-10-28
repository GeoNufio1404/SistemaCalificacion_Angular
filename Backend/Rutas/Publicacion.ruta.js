var express = require('express');
const Publicacion = require('../Modelos/Publicacion.Modelo');
var PublicacionModelo = require('../Modelos/Publicacion.Modelo');
var PublicacionRuta = express.Enrutador();

// Listar todos los elementos de una tabla
PublicacionRuta.get('/ publicacion', function (req, res) {
    PublicacionModelo.selectAll(function (resultado) {
        if (resultado! == undefined) {
            res.json(resultado);
        } más  {
            res.json({ mensaje: 'No hay nada' });
        }
    })
});

// Listar un elemento especifico
PublicacionRuta.get('/ publicacion /: IDPublicacion', function (req, res) {
    var id = req.params.IDPublicacion;
    PublicacionModelo.selectOne(id, function (resultado) {
        if (resultado! == undefined) {
            res.json(resultado);
        } más {
            res.json({ mensaje: 'No hay nada' });
        }
    });
});

// Crear un nuevo elemento 
PublicacionRuta.post('/ publicacion', function (req, res) {
    var data = req.el cuerpo;
    PublicacionModelo.crear(datos, función(resultado) {
        si(m resultado .affectedRows > 0 ) {
        res.json(resultado);
    } más  {
        res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
    }
});
} );

// Reemplazar un nuevo elemento 
PublicacionRuta.put('/ publicacion /: IDPublicacion', function (req, res) {
    var IDPublicacion = req.params.IDPublicacion;
    var data = req.el cuerpo;

    if (IDPublicacion == data.IDPublicacion) {
        PublicacionModelo.editar(datos, función(resultado) {
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
PublicacionRuta.delete('/ publicacion /: IDPublicacion', function (req, res) {
    var IDPublicacion = req.params.IDPublicacion;
    PublicacionModelo.eliminar(IDPublicacion, función(resultado) {
        si(m resultado .affectedRows > 0 ) {
        res.json(resultado);
    } más  {
        res.json({ 'Mensaje': 'No se pudo realizar esta acción' });
    }
})
} );

módulo.exportaciones = PublicacionRuta;