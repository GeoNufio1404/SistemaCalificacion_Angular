import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { PerfilComponent } from './componets/perfil/perfil.component';
import { InicioSesionComponent } from './componets/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './componets/registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PerfilComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
