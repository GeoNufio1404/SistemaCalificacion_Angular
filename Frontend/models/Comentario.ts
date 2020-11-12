export class Comentario {

    constructor(
        public IDComentario: number,
        public Mensaje: string,
        public Publicacion_IDPublicacion: number,
        public Usuario_Carnet: number
    ) { }
}