var  express  =  require ( 'express' ) ;
const  Curso_Catedratico  =  require ( '../Modelos/Curso_Catedratico.Modelo' ) ;
var  Curso_CatedraticoModelo  =  require ( '../Modelos/Curso_Catedratico.Modelo' ) ;
var  Curso_CatedraticoRuta  =  express . Enrutador ( ) ;

// Listar todos los elementos de una tabla
Curso_CatedraticoRuta . get ( '/ curso_catedratico' ,  function ( req , res ) {
    Curso_CatedraticoModelo . selectAll ( function ( resultado ) {
       if  (  resultado ! == undefined )  {
           res . json ( resultado ) ;
       }  más  {
           res . json ( { mensaje : 'No hay nada' } ) ;
       }
   } ) 
} ) ;

// Listar un elemento especifico
Curso_CatedraticoRuta . get ( '/ curso_catedratico /: IDCatedraticoCurso' ,  function ( req , res ) {
    var  id  =  req . params . IDCatedraticoCurso ;
    Curso_CatedraticoModelo . selectOne ( id , function ( resultado ) {
        if  ( resultado ! == undefined ) {
            res . json ( resultado ) ;
        } más {
            res . json ( { mensaje : 'No hay nada' } ) ;
        }
    } ) ;
} ) ;

// Crear un nuevo elemento 
Curso_CatedraticoRuta . post ( '/ Curso_Catedratico' ,  function ( req ,  res ) {
    var  data  =  req . el cuerpo ;
    Curso_CatedraticoModelo . crear ( datos ,  función ( resultado ) {
        si ( m resultado . affectedRows  >  0 ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
        }
    } ) ;
} ) ;

// Reemplazar un nuevo elemento 
Curso_CatedraticoRuta . put ( '/ Curso_Catedratico /: IDCatedraticoCurso' ,  function ( req ,  res ) {
    var  IDCatedraticoCurso  =  req . params . IDCatedraticoCurso ;
    var  data  =  req . el cuerpo ;

    if ( IDCatedraticoCurso  ==  data . IDCatedraticoCurso ) {
        Curso_CatedraticoModelo . editar ( datos ,  función ( resultado ) {
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
Curso_CatedraticoRuta . delete ( '/ Curso_Catedratico /: IDCatedraticoCurso' ,  function ( req ,  res ) {
    var  IDCatedraticoCurso  =  req . params . IDCatedraticoCurso ;
    Curso_CatedraticoModelo . eliminar ( IDCatedraticoCurso ,  función ( resultado ) {
        si ( m resultado . affectedRows  >  0 ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
        }
    } )
} ) ;


módulo . exportaciones  =  Curso_CatedraticoRuta ;