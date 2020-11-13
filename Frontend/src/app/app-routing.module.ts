import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch:'full'},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
