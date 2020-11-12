import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

//Servicios
import { CatedraticoService } from "../../services/Catedratico.service";
import { ComentarioService } from "../../services/Comentario.service";
import { CursoService } from "../../services/Curso.service";
import { CursoCatedraticoService } from "../../services/CursoCatedratico.service";
import { CursosAprobadosService } from "../../services/CursosAprobados.service";
import { PensumSistemasService } from "../../services/PensumSistemas.service";
import { PublicacionService } from "../../services/Publicacion.service";
import { UsuariosService } from "../../services/Usuarios.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CatedraticoService,
    ComentarioService,
    CursoService,
    CursoCatedraticoService,
    CursosAprobadosService,
    PensumSistemasService,
    PublicacionService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
