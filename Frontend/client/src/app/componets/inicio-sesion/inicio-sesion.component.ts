import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  user = {ID:"",password:""}
  constructor() { }

  ngOnInit(): void {
  }
  signUp() {
    console.log(this.user)
  }
}
