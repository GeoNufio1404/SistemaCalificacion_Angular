import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PerfilComponent} from './componets/perfil/perfil.component'
import {InicioSesionComponent} from './componets/inicio-sesion/inicio-sesion.component'
import {RegistroUsuarioComponent} from './componets/registro-usuario/registro-usuario.component'
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
