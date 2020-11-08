import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  userRegistrado = {
    ID:"",name:"",apellidoUser:"",emailUser:"",passwordUser:""
  }
  constructor() { }

  ngOnInit(): void {
  }
  signIp(){
    console.log(this.userRegistrado)
  }
}
