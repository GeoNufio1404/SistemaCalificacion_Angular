import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Global } from './GlobalUrl';
import { Publicacion } from "../models/Publicacion";

@Injectable()
export class PublicacionService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url
    }

    getPublicaciones() {
        return this._http.get<Publicacion[]>(this.url + "/publicacion");
    }

    selectPublicacion(id: any) {
        return this._http.get<Publicacion[]>(this.url + '/publicacion/' + id);
    }

    addPublicacion(Publicacion: Publicacion) {
        let json = JSON.stringify(Publicacion);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/publicacion", json, { headers: headers });
    }

    editPublicacion(Publicacion: Publicacion, id: any) {
        let json = JSON.stringify(Publicacion);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.put(this.url + "/publicacion/" + id, json, { headers: headers });
    }

    removePublicacion(id: any) {
        return this._http.delete(this.url + "/publicacion/" + id);
    }

    mensaje() {
        return "Desde el servicio de Publicaciones";
    }
}