import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
//import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  user = {ID:"",password:""}
  constructor(private authServices: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  InicioSession() {
    console.log(this.user)
    this.authServices.InicioSession(this.user)
    .subscribe(
      res => {console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(["/Inicio"]);//Se debe crear el componente de inicio
      }
      ,
      err => {console.log(err)}
    )
  }
}
