var  express  =  require ( 'express' ) ;
const  Comentario  =  require ( '../Modelos/Comentario.Modelo' ) ;
var  ComentarioModelo  =  require ( '../Modelos/Comentario.Modelo' ) ;
var  ComentarioRuta  =  express . Enrutador ( ) ;

// Listar todos los elementos de una tabla
ComentarioRuta . get ( '/ comentario' ,  function ( req , res ) {
    ComentarioModelo . selectAll ( function ( resultado ) {
       if  (  resultado ! == undefined )  {
           res . json ( resultado ) ;
       }  más  {
           res . json ( { mensaje : 'No hay nada' } ) ;
       }
   } ) 
} ) ;

// Listar un elemento especifico
ComentarioRuta . get ( '/ comentario /: IDComentario' ,  function ( req , res ) {
    var  id  =  req . params . IDComentario ;
    ComentarioModelo . selectOne ( id , function ( resultado ) {
        if  ( resultado ! == undefined ) {
            res . json ( resultado ) ;
        } más {
            res . json ( { mensaje : 'No hay nada' } ) ;
        }
    } ) ;
} ) ;

// Crear un nuevo elemento 
ComentarioRuta . post ( '/ comentario' ,  function ( req ,  res ) {
    var  data  =  req . el cuerpo ;
    ComentarioModelo . crear ( datos ,  función ( resultado ) {
        si ( m resultado . affectedRows  >  0 ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
        }
    } ) ;
} ) ;

// Reemplazar un nuevo elemento 
ComentarioRuta . put ( '/ comentario /: IDComentario' ,  function ( req ,  res ) {
    var  IDComentario  =  req . params . IDComentario ;
    var  data  =  req . el cuerpo ;

    if ( IDComentario  ==  data . IDComentario ) {
        ComentarioModelo . editar ( datos ,  función ( resultado ) {
            si ( m resultado . affectedRows  >  0 ) {
                res . json ( resultado ) ;
            }  más  {
                res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
            }
        } ) ;
    } más {
        res . json ( { 'Mensaje' : 'No son el mismo id' } ) ;
    }   
} ) ;

// Eliminar un elemento
ComentarioRuta . delete ( '/ comentario /: IDComentario' ,  function ( req ,  res ) {
    var  IDComentario  =  req . params . IDComentario ;
    ComentarioModelo . eliminar ( IDComentario ,  función ( resultado ) {
        si ( m resultado . affectedRows  >  0 ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
        }
    } )
} ) ;

módulo . exportaciones  =  ComentarioRuta ;