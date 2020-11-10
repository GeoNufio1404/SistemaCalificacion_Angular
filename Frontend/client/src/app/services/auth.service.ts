import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  InicioSession(user){
    return this.http.post<any>(this.URL+ '/inicio-sesion',user)//iria la direccion que esta en el backend
  }
  Registro(user){
    return this.http.post<any>(this.URL+ '/registro-usuario',user)//iria la direccion que esta en el backend
  }
  ContrOlvidada(user){
    return this.http.post<any>(this.URL+ '/olvidada',user)//iria la direccion que esta en el backend
  }

  loggedIniciado(){//Si ha iniciado verifica si ha iniciado sesion
    return !!localStorage.getItem("token");

  }
}
