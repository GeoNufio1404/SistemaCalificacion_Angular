import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Global } from './GlobalUrl';
import { Catedratico } from "../models/Catedratico";

@Injectable()
export class CatedraticoService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url
    }

    getCatedraticos() {
        return this._http.get<Catedratico[]>(this.url + "/catedratico");
    }

    selectCatedratico(id: any) {
        return this._http.get<Catedratico[]>(this.url + '/catedratico/' + id);
    }

    addCatedratico(Catedratico: Catedratico) {
        let json = JSON.stringify(Catedratico);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/catedratico", json, { headers: headers });
    }

    editCatedratico(Catedratico: Catedratico, id: any) {
        let json = JSON.stringify(Catedratico);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.put(this.url + "/catedratico/" + id, json, { headers: headers });
    }

    removeCatedratico(id: any) {
        return this._http.delete(this.url + "/catedratico/" + id);
    }

    mensaje() {
        return "Desde el servicio de Catedraticos";
    }
}