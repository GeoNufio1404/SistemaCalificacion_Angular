import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { PerfilComponent } from './componets/perfil/perfil.component';
import { InicioSesionComponent } from './componets/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './componets/registro-usuario/registro-usuario.component';
import { OlvContrComponent } from './componets/olv-contr/olv-contr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PerfilComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    OlvContrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
