import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Global } from './GlobalUrl';
import { Comentario } from "../models/Comentario";

@Injectable()
export class ComentarioService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url
    }

    getComentarios() {
        return this._http.get<Comentario[]>(this.url + "/comentario");
    }

    selectComentario(id: any) {
        return this._http.get<Comentario[]>(this.url + '/comentario/' + id);
    }

    addComentario(Comentario: Comentario) {
        let json = JSON.stringify(Comentario);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/comentario", json, { headers: headers });
    }

    editComentario(Comentario: Comentario, id: any) {
        let json = JSON.stringify(Comentario);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.put(this.url + "/comentario/" + id, json, { headers: headers });
    }

    removeComentario(id: any) {
        return this._http.delete(this.url + "/comentario/" + id);
    }

    mensaje() {
        return "Desde el servicio de Comentarios";
    }
}