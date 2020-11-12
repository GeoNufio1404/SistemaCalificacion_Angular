import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Global } from './GlobalUrl';
import { CursoCatedratico } from "../models/CursoCatedratico";

@Injectable()
export class CursoCatedraticoService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url
    }

    getCursoCatedratico() {
        return this._http.get<CursoCatedratico[]>(this.url + "/curso_catedratico");
    }

    selectCursoCatedratico(id: any) {
        return this._http.get<CursoCatedratico[]>(this.url + '/curso_catedratico/' + id);
    }

    addCursoCatedratico(CursoCatedratico: CursoCatedratico) {
        let json = JSON.stringify(CursoCatedratico);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/curso_catedratico", json, { headers: headers });
    }

    editCursoCatedratico(CursoCatedratico: CursoCatedratico, id: any) {
        let json = JSON.stringify(CursoCatedratico);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.put(this.url + "/curso_catedratico/" + id, json, { headers: headers });
    }

    removeCursoCatedratico(id: any) {
        return this._http.delete(this.url + "/curso_catedratico/" + id);
    }

    mensaje() {
        return "Desde el servicio de CursoCatedratico";
    }
}