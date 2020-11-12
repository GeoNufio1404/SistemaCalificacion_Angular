export class Publicacion {

    constructor(
        public IDPublicacion: number,
        public mensaje: string,
        public Usuario_Carnet: number,
        public Fecha: Date,
        public Curso_Catedratico_idCatedraticoCurso: number,
        public Curso_CodigoCurso: number,
        public Catedratico_NoCatedratico: number,
        public Tipo: number
    ) { }
}