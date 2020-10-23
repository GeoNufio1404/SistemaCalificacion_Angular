
create Database DB_Proyecto
go

use DB_Proyecto
go 

create table Usuarios(
	CarnetUsuario int not null primary key,
	NombresUsuario Varchar(45) not null,
	ApellidosUsuario Varchar(45) not null,
	PassUsuario varchar(45) not null,
	Correo varchar(45)
)
go

create table Curso(
	CodigoCurso int not null primary key,
	Nombre Varchar(45) not null
)
go

create table PensumSistemas(
	idCursoPensum int not null primary key,
	Curso_CodigoCurso int not null,
	Creditos int not null,
	Semestre int not null,
	constraint FK_PensumSistemas_Curso foreign key (Curso_CodigoCurso) references Curso(CodigoCurso)
)
go

create table CursosAprobados(
	CarnetU int not null,
	CursoP int not null,
	NotaAprobada int not null,
	constraint FK_CusosAprobados_Usuarios foreign key (CarnetU) references Usuarios(CarnetUsuario),
	constraint FK_CursosAprobados_CursoP foreign key (CursoP) references PensumSistemas(idCursoPensum)
)
go

create table Catedratico(
	NoCatedratico int not null primary key,
	Nombres varchar(45) not null,
	Apellidos varchar(45) not null
)
go 

create table Curso_Catedratico(
	IDCatedraticoCurso int not null primary key,
	Curso_CodigoCurso int not null,
	Catedratico_NoCatedratico int not null,
	constraint FK_Curso_Catedratico_Curso foreign key (Curso_CodigoCurso) references Curso(CodigoCurso),
	constraint FK_Curso_Catedratico_Catedratico foreign key (Catedratico_NoCatedratico) references Catedratico(NoCatedratico)
)
go

create table Publicacion(
	IDPublicacion int not null primary key,
	mensaje varchar(100) not null,
	Usuario_Carnet int not null,
	Fecha date not null,
	Curso_Catedratico_idCatedraticoCurso int not null,
	Curso_CodigoCurso int not null,
	Catedratico_NoCatedratico int not null,
	Tipo int not null,
	constraint FK_Publicacion_Usuario foreign key (Usuario_Carnet) references Usuarios(CarnetUsuario),
	constraint FK_Publicacion_Curso_Catedratico foreign key (Curso_Catedratico_idCatedraticoCurso) references Curso_Catedratico(IDCatedraticoCurso),
	constraint FK_Publicacion_Curso foreign key (Curso_CodigoCurso) references Curso(CodigoCurso),
	constraint FK_Publicacion_Catedratico foreign key (Catedratico_NoCatedratico) references Catedratico(NoCatedratico)
)
go

create table Comentario(
	IDComentario int not null primary key,
	Mensaje Varchar(100) not null,
	Publicacion_IDPublicacion int not null,
	Usuario_Carnet int not null,
	constraint FK_Comentario_Publicacion foreign key (Publicacion_IDPublicacion) references Publicacion(IDPublicacion),
	constraint FK_Comentario_Usuario foreign key (Usuario_Carnet) references Usuarios(CarnetUsuario)
)
go