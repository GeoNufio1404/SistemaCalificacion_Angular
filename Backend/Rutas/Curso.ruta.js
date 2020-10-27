var  express  =  require ( 'express' ) ;
const  Curso  =  require ( '../Modelos/Curso.Modelo' ) ;
var  CursoModelo  =  require ( '../Modelos/Curso.Modelo' ) ;
var  CursoRuta  =  express . Enrutador ( ) ;

// Listar todos los elementos de una tabla
CursoRuta . get ( '/ curso' ,  function ( req , res ) {
    CursoModelo . selectAll ( function ( resultado ) {
       if  (  resultado ! == undefined )  {
           res . json ( resultado ) ;
       }  más  {
           res . json ( { mensaje : 'No hay nada' } ) ;
       }
   } ) 
} ) ;

// Listar un elemento especifico
CursoRuta . get ( '/ curso /: CodigoCurso' ,  function ( req , res ) {
    var  id  =  req . params . CodigoCurso ;
    CursoModelo . selectOne ( id , function ( resultado ) {
        if  ( resultado ! == undefined ) {
            res . json ( resultado ) ;
        } más {
            res . json ( { mensaje : 'No hay nada' } ) ;
        }
    } ) ;
} ) ;

// Crear un nuevo elemento 
CursoRuta . post ( '/ curso' ,  function ( req ,  res ) {
    var  data  =  req . el cuerpo ;
    CursoModelo . crear ( datos ,  función ( resultado ) {
        si ( m resultado . affectedRows  >  0 ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
        }
    } ) ;
} ) ;

// Reemplazar un nuevo elemento 
CursoRuta . put ( '/ curso /: CodigoCurso' ,  function ( req ,  res ) {
    var  CodigoCurso  =  req . params . CodigoCurso ;
    var  data  =  req . el cuerpo ;

    if ( CodigoCurso  ==  data . CodigoCurso ) {
        CursoModelo . editar ( datos ,  función ( resultado ) {
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
CursoRuta . delete ( '/ curso /: CodigoCurso' ,  function ( req ,  res ) {
    var  CodigoCurso  =  req . params . CodigoCurso ;
    CursoModelo . eliminar ( CodigoCurso ,  función ( resultado ) {
        si ( m resultado . affectedRows  >  0 ) {
            res . json ( resultado ) ;
        }  más  {
            res . json ( { 'Mensaje' : 'No se pudo realizar esta acción' } ) ;
        }
    } )
} ) ;

módulo . exportaciones  =  CursoRuta ;