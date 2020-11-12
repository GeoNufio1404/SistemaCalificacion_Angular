import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PerfilComponent} from './componets/perfil/perfil.component'
import {InicioSesionComponent} from './componets/inicio-sesion/inicio-sesion.component'
import {RegistroUsuarioComponent} from './componets/registro-usuario/registro-usuario.component'
import { OlvContrComponent } from "./componets/olv-contr/olv-contr.component";
import {PantallaInicialComponent} from  "./components/pantalla-inicial/pantalla-inicial.component";
import {ComentariosComponent} from "./components/comentarios/comantarios.component";
const routes: Routes = [
  {
    path: '',//Esto redirecciona cuando ha iniciado la página
    redirectTo: '/inicio-sesion'//Redirecciona al perfil
    ,pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',//
    component: InicioSesionComponent
  },
  {
    path: 'registro-usuario',//
    component: RegistroUsuarioComponent
  }
  ,
  {
    path: 'perfil',//
    component: RegistroUsuarioComponent
  }
  ,
  {
    path: 'olv-contr',//
    component: OlvContrComponent
  },
  {
    path: 'pantalla-inicio',//
    component: PantallaInicialComponent
  },
  {
    path: 'comentario'´,//
    component: ComentariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
