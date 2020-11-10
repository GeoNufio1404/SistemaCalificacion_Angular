import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  userRegistrado = {
    ID:"",name:"",apellidoUser:"",emailUser:"",passwordUser:""
  }
  constructor(private authServices: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  Registro(){
    console.log(this.userRegistrado)
    this.authServices.Registro(this.userRegistrado)
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
