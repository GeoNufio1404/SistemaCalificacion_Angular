import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Global } from './GlobalUrl';
import { CursosAprobados } from "../models/CursosAprobados";

@Injectable()
export class CursosAprobadosService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url
    }

    getCursosAprobados() {
        return this._http.get<CursosAprobados[]>(this.url + "/cursosaprobados");
    }

    selectCursosAprobados(id: any) {
        return this._http.get<CursosAprobados[]>(this.url + '/cursosaprobados/' + id);
    }

    addCursosAprobados(CursosAprobados: CursosAprobados) {
        let json = JSON.stringify(CursosAprobados);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/cursosaprobados", json, { headers: headers });
    }

    editCursosAprobados(CursosAprobados: CursosAprobados, id: any) {
        let json = JSON.stringify(CursosAprobados);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.put(this.url + "/cursosaprobados/" + id, json, { headers: headers });
    }

    removeCursosAprobados(id: any) {
        return this._http.delete(this.url + "/cursosaprobados/" + id);
    }

    mensaje() {
        return "Desde el servicio de CursosAprobados";
    }
}