import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Global } from './GlobalUrl';
import { PensumSistemas } from "../models/PensumSistemas";

@Injectable()
export class PensumSistemasService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url
    }

    getPensumSistemas() {
        return this._http.get<PensumSistemas[]>(this.url + "/pensumsistemas");
    }

    selectPensumSistemas(id: any) {
        return this._http.get<PensumSistemas[]>(this.url + '/pensumsistemas/' + id);
    }

    addPensumSistemas(PensumSistemas: PensumSistemas) {
        let json = JSON.stringify(PensumSistemas);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/pensumsistemas", json, { headers: headers });
    }

    editPensumSistemas(PensumSistemas: PensumSistemas, id: any) {
        let json = JSON.stringify(PensumSistemas);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.put(this.url + "/pensumsistemas/" + id, json, { headers: headers });
    }

    removePensumSistemas(id: any) {
        return this._http.delete(this.url + "/pensumsistemas/" + id);
    }

    mensaje() {
        return "Desde el servicio de PensumSistemas";
    }
}