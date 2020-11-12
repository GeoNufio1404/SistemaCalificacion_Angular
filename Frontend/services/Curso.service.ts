import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Global } from './GlobalUrl';
import { Curso } from "../models/Curso";

@Injectable()
export class CursoService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url
    }

    getCursos() {
        return this._http.get<Curso[]>(this.url + "/curso");
    }

    selectCurso(id: any) {
        return this._http.get<Curso[]>(this.url + '/curso/' + id);
    }

    addCurso(Curso: Curso) {
        let json = JSON.stringify(Curso);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + "/curso", json, { headers: headers });
    }

    editCurso(Curso: Curso, id: any) {
        let json = JSON.stringify(Curso);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.put(this.url + "/curso/" + id, json, { headers: headers });
    }

    removeCurso(id: any) {
        return this._http.delete(this.url + "/curso/" + id);
    }

    mensaje() {
        return "Desde el servicio de Cursos";
    }
}

