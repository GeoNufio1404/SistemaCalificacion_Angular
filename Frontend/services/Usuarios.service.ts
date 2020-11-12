import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Global } from './GlobalUrl';
import { Usuarios } from "../models/Usuarios";

@Injectable()
export class UsuariosService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url
    }

    getUsuarios() {
        return this._http.get<Usuarios[]>(this.url + "/usuarios");
    }

    selectUsuarios(id: any) {
        return this._http.get<Usuarios[]>(this.url + '/usuarios/' + id);
    }

    addUsuarios(Usuarios: Usuarios) {
        let json = JSON.stringify(Usuarios);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/usuarios", json, { headers: headers });
    }

    editUsuarios(Usuarios: Usuarios, id: any) {
        let json = JSON.stringify(Usuarios);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.put(this.url + "/usuarios/" + id, json, { headers: headers });
    }

    removeUsuarios(id: any) {
        return this._http.delete(this.url + "/usuarios/" + id);
    }


    signup(registrar_to_login, gettoken = null) {
        if (gettoken != null) {
            registrar_to_login.gettoken = gettoken;
        }
        let params = JSON.stringify(registrar_to_login);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/usuarios/", params, { headers: headers }).subscribe(res => { console.log(res) });

    }

    mensaje() {
        return "Desde el servicio de Usuarios";
    }
}

