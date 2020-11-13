import { Component, OnInit } from '@angular/core';
import { Usuarios } from "../../../models/Usuarios";
import { UsuariosService } from "../../../services/Usuarios.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit {
  public usuarios: Usuarios;
  public accion: string;
  public ListaUsuarios: Usuarios[];

  constructor() {
    
  }

  ngOnInit(): void {
    
  }


}
