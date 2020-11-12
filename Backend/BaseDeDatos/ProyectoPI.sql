create database db_proyecto;

use db_proyecto;

create table Usuarios(
	CarnetUsuario int not null primary key,
	NombresUsuario Varchar(45) not null,
	ApellidosUsuario Varchar(45) not null,
	PassUsuario varchar(45) not null,
	Correo varchar(45)
);

create table Curso(
	CodigoCurso int primary key not null,
	Nombre Varchar(45) not null
);

create table PensumSistemas(
	idCursoPensum int not null primary key,
	Curso_CodigoCurso int not null,
	Creditos int not null,
	Semestre int not null,
	constraint FK_PensumSistemas_Curso foreign key (Curso_CodigoCurso) references Curso(CodigoCurso)
);

create table CursosAprobados(
	CarnetU int not null,
	CursoP int not null,
	NotaAprobada int not null,
	constraint FK_CusosAprobados_Usuarios foreign key (CarnetU) references Usuarios(CarnetUsuario),
	constraint FK_CursosAprobados_CursoP foreign key (CursoP) references PensumSistemas(idCursoPensum)
);

create table Catedratico(
	NoCatedratico int not null primary key,
	Nombres varchar(45) not null,
	Apellidos varchar(45) not null
);

create table Curso_Catedratico(
	IDCatedraticoCurso int not null primary key,
	Curso_CodigoCurso int not null,
	Catedratico_NoCatedratico int not null,
	constraint FK_Curso_Catedratico_Curso foreign key (Curso_CodigoCurso) references Curso(CodigoCurso),
	constraint FK_Curso_Catedratico_Catedratico foreign key (Catedratico_NoCatedratico) references Catedratico(NoCatedratico)
);

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
);

create table Comentario(
	IDComentario int not null primary key,
	Mensaje Varchar(100) not null,
	Publicacion_IDPublicacion int not null,
	Usuario_Carnet int not null,
	constraint FK_Comentario_Publicacion foreign key (Publicacion_IDPublicacion) references Publicacion(IDPublicacion),
	constraint FK_Comentario_Usuario foreign key (Usuario_Carnet) references Usuarios(CarnetUsuario)
)

------------------------------ Stored procedures ------------------------------ 
 
 -------------------- Usuarios --------------------

--Listar Todos

DELIMITER
    $$
CREATE PROCEDURE sp_ListarUsuarios()
BEGIN
    SELECT * FROM Usuarios;
END $$

--Listar uno

DELIMITER
    $$
CREATE PROCEDURE sp_ListarUsuario(
    IN _CarnetUsuario INT
)
BEGIN
    SELECT * FROM Usuarios WHERE CarnetUsuario = _CarnetUsuario;
END $$

--Agregar

DELIMITER
    $$
CREATE PROCEDURE sp_AgregarUsuarios(
    IN _CarnetUsuario INT,
    IN _NombresUsuario VARCHAR(45),
    IN _ApellidosUsuario VARCHAR(45),
    IN _PassUsuario VARCHAR(45),
    IN _Correo VARCHAR(45)
)
BEGIN
    INSERT INTO Usuarios(
        CarnetUsuario,
        NombresUsuario,
        ApellidosUsuario,
        PassUsuario,
        Correo
    )
VALUES(
    _CarnetUsuario,
    _NombresUsuario,
    _ApellidosUsuario,
    _PassUsuario,
    _Correo
); END $$

-- Editar

DELIMITER
    $$
CREATE PROCEDURE sp_EditarUsuarios(
    IN _CarnetUsuario INT,
    IN _NombresUsuario VARCHAR(45),
    IN _ApellidosUsuario VARCHAR(45),
    IN _PassUsuario VARCHAR(45),
    IN _Correo VARCHAR(45)
)
BEGIN
    UPDATE
        Usuarios
    SET
        CarnetUsuario = _CarnetUsuario,
        NombresUsuario = _NombresUsuario,
        ApellidosUsuario = _ApellidosUsuario,
        PassUsuario = _PassUsuario,
        Correo = _Correo
    WHERE
        CarnetUsuario = _CarnetUsuario ; END $$

-- Eliminar

DELIMITER
    $$
CREATE PROCEDURE sp_EliminarUsuarios(IN _CarnetUsuario INT)
BEGIN
    DELETE
FROM
    Usuarios
WHERE
    CarnetUsuario = _CarnetUsuario ;
END $$

-------------------- Curso --------------------

--Listar Todos

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCursos()
BEGIN
    SELECT * FROM Curso;
END $$

--Listar uno

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCurso(
    IN _CodigoCurso INT
)
BEGIN
    SELECT * FROM Curso WHERE CodigoCurso = _CodigoCurso;
END $$

--Agregar

DELIMITER
    $$
CREATE PROCEDURE sp_AgregarCurso(
    IN _CodigoCurso INT,
    IN _Nombre VARCHAR(45)
)
BEGIN
    INSERT INTO Curso(
        CodigoCurso,
        Nombre
    )
VALUES(
    _CodigoCurso,
    _Nombre
) ; END $$

-- Editar

DELIMITER
    $$
CREATE PROCEDURE sp_EditarCurso(
    IN _CodigoCurso INT,
    IN _Nombre VARCHAR(45)
)
BEGIN
    UPDATE
        Curso
    SET 
        CodigoCurso = _CodigoCurso,
        Nombre = _Nombre
    WHERE
        CodigoCurso = _CodigoCurso ; END $$

-- Eliminar

DELIMITER
    $$
CREATE PROCEDURE sp_EliminarCurso(IN _CodigoCurso INT)
BEGIN
    DELETE
FROM
    Curso
WHERE
    CodigoCurso = _CodigoCurso ;
END $$

-------------------- PensumSistemas --------------------

--Listar Todos

DELIMITER
    $$
CREATE PROCEDURE sp_ListarPensumSistemas()
BEGIN
    SELECT * FROM PensumSistemas;
END $$

--Listar uno

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCursoPensumSistemas(
    IN _idCursoPensum INT
)
BEGIN
    SELECT * FROM PensumSistemas WHERE idCursoPensum = _idCursoPensum;
END $$

--Agregar

DELIMITER
    $$
CREATE PROCEDURE sp_AgregarPensumSistemas(
    IN _idCursoPensum INT,
    IN _Curso_CodigoCurso INT,
    IN _Creditos INT,
    IN _Semestre INT
)
BEGIN
    INSERT INTO PensumSistemas(
        idCursoPensum,
        Curso_CodigoCurso,
        Creditos,
        Semestre
    )
VALUES(
    _idCursoPensum,
    _Curso_CodigoCurso,
    _Creditos,
    _Semestre
) ; END $$

-- Editar

DELIMITER
    $$
CREATE PROCEDURE sp_EditarPensumSistemas(
    IN _idCursoPensum INT,
    IN _Curso_CodigoCurso INT,
    IN _Creditos INT,
    IN _Semestre INT
)
BEGIN
    UPDATE
        PensumSistemas
    SET 
        idCursoPensum = _idCursoPensum,
        Curso_CodigoCurso = _Curso_CodigoCurso,
        Creditos = _Creditos,
        Semestre = _Semestre
    WHERE
        idCursoPensum = _idCursoPensum ; END $$

-- Eliminar

DELIMITER
    $$
CREATE PROCEDURE sp_EliminarPensumSistemas(IN _idCursoPensum INT)
BEGIN
    DELETE
FROM
    PensumSistemas
WHERE
    idCursoPensum = _idCursoPensum ;
END $$

-------------------- CursosAprobados --------------------

--Listar Todos

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCursosAprobados(
    IN _CarnetU INT
)
BEGIN
    SELECT * FROM CursosAprobados WHERE CarnetU = _CarnetU;
END $$

--Listar uno

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCursoAprobado(
    IN _CarnetU INT,
    IN _CursoP INT
)
BEGIN
    SELECT * FROM CursosAprobados WHERE CarnetU = _CarnetU AND CursoP = _CursoP;
END $$

--Agregar

DELIMITER
    $$
CREATE PROCEDURE sp_AgregarCursosAprobados(
    IN _CarnetU INT,
    IN _CursoP INT,
    IN _NotaAprobada INT
)
BEGIN
    INSERT INTO CursosAprobados(
        CarnetU,
        CursoP,
        NotaAprobada
    )
VALUES(
    _CarnetU,
    _CursoP,
    _NotaAprobada
) ; END $$

-- Editar

DELIMITER
    $$
CREATE PROCEDURE sp_EditarCursosAprobados(
    IN _CarnetU INT,
    IN _CursoP INT,
    IN _NotaAprobada INT
)
BEGIN
    UPDATE
        CursosAprobados
    SET 
        CarnetU = _CarnetU,
        CursoP = _CursoP,
        NotaAprobada = _NotaAprobada
    WHERE
        CarnetU = _CarnetU ; END $$

-- Eliminar

DELIMITER
    $$
CREATE PROCEDURE sp_EliminarCursosAprobados(IN _CarnetU INT)
BEGIN
    DELETE
FROM
    CursosAprobados
WHERE
    CarnetU = _CarnetU ;
END $$

-------------------- Catedratico --------------------

--Listar Todos

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCatedraticos(
)
BEGIN
    SELECT * FROM Catedratico;
END $$

--Listar uno

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCatedratico(
    IN _NoCatedratico INT
)
BEGIN
    SELECT * FROM Catedratico WHERE NoCatedratico = _NoCatedratico;
END $$

--Agregar

DELIMITER
    $$
CREATE PROCEDURE sp_AgregarCatedratico(
    IN _NoCatedratico INT,
    IN _Nombres varchar(45),
    IN _Apellidos varchar(45)
)
BEGIN
    INSERT INTO Catedratico(
        NoCatedratico,
        Nombres,
        Apellidos
    )
VALUES(
    _NoCatedratico,
    _Nombres,
    _Apellidos
) ; END $$

-- Editar

DELIMITER
    $$
CREATE PROCEDURE sp_EditarCatedratico(
    IN _NoCatedratico INT,
    IN _Nombres varchar(45),
    IN _Apellidos varchar(45)
)
BEGIN
    UPDATE
        Catedratico
    SET 
        NoCatedratico = _NoCatedratico,
        Nombres = _Nombres,
        Apellidos = _Apellidos
    WHERE
        NoCatedratico = _NoCatedratico ; END $$

-- Eliminar

DELIMITER
    $$
CREATE PROCEDURE sp_EliminarCatedratico(IN _NoCatedratico INT)
BEGIN
    DELETE
FROM
    Catedratico
WHERE
    NoCatedratico = _NoCatedratico;
END $$

-------------------- Curso_Catedratico --------------------

--Listar Todos

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCursosCatedratico(
)
BEGIN
    SELECT * FROM Curso_Catedratico;
END $$

--Listar uno

DELIMITER
    $$
CREATE PROCEDURE sp_ListarCursoCatedratico(
    IN _IDCatedraticoCurso INT
)
BEGIN
    SELECT * FROM Curso_Catedratico WHERE IDCatedraticoCurso = _IDCatedraticoCurso;
END $$

--Agregar

DELIMITER
    $$
CREATE PROCEDURE sp_AgregarCurso_Catedratico(
    IN _IDCatedraticoCurso INT,
    IN _Curso_CodigoCurso INT,
    IN _Catedratico_NoCatedratico INT
)
BEGIN
    INSERT INTO Curso_Catedratico(
        IDCatedraticoCurso,
        Curso_CodigoCurso,
        Catedratico_NoCatedratico
    )
VALUES(
    _IDCatedraticoCurso,
    _Curso_CodigoCurso,
    _Catedratico_NoCatedratico
) ; END $$

-- Editar

DELIMITER
    $$
CREATE PROCEDURE sp_EditarCurso_Catedratico(
    IN _IDCatedraticoCurso INT,
    IN _Curso_CodigoCurso INT,
    IN _Catedratico_NoCatedratico INT
)
BEGIN
    UPDATE
        Curso_Catedratico
    SET 
        IDCatedraticoCurso = _IDCatedraticoCurso,
        Curso_CodigoCurso = _Curso_CodigoCurso,
        Catedratico_NoCatedratico = _Catedratico_NoCatedratico
    WHERE
        IDCatedraticoCurso = _IDCatedraticoCurso ; END $$

-- Eliminar

DELIMITER
    $$
CREATE PROCEDURE sp_EliminarCurso_Catedratico(IN _IDCatedraticoCurso INT)
BEGIN
    DELETE
FROM
    Curso_Catedratico
WHERE
    IDCatedraticoCurso = _IDCatedraticoCurso;
END $$

-------------------- Publicacion --------------------

--Listar Todos

DELIMITER
    $$
CREATE PROCEDURE sp_ListarPublicaciones(
)
BEGIN
    SELECT * FROM Publicacion;
END $$

--Listar uno

DELIMITER
    $$
CREATE PROCEDURE sp_ListarPublicacion(
    IN _IDPublicacion INT
)
BEGIN
    SELECT * FROM Publicacion WHERE IDPublicacion = _IDPublicacion;
END $$

--Agregar

DELIMITER
    $$
CREATE PROCEDURE sp_AgregarPublicacion(
    IN _IDPublicacion INT,
    IN _mensaje varchar(100),
    IN _Usuario_Carnet INT,
    IN _Fecha DATE,
    IN _Curso_Catedratico_idCatedraticoCurso INT,
    IN _Curso_CodigoCurso INT,
    IN _Catedratico_NoCatedratico INT,
    IN _Publicacion_IDPublicacion INT,
    IN _Tipo INT
)
BEGIN
    INSERT INTO Publicacion(
        IDPublicacion,
        mensaje,
        Usuario_Carnet,
        Fecha,
        Curso_Catedratico_idCatedraticoCurso,
        Curso_CodigoCurso,
        Catedratico_NoCatedratico,
        Tipo
    )
VALUES(
    _IDPublicacion,
    _mensaje,
    _Usuario_Carnet,
    _Fecha,
    _Curso_Catedratico_idCatedraticoCurso,
    _Curso_CodigoCurso,
    _Catedratico_NoCatedratico,
    _Publicacion_IDPublicacion,
    _Tipo
) ; END $$

-- Editar

DELIMITER
    $$
CREATE PROCEDURE sp_EditarPublicacion(
    IN _IDPublicacion INT,
    IN _Mensaje VARCHAR(100),
    IN _Usuario_Carnet INT,
    IN _Fecha DATE,
    IN _Curso_Catedratico_idCatedraticoCurso INT,
    IN _Curso_CodigoCurso INT,
    IN _Catedratico_NoCatedratico INT,
    IN _Tipo INT
)
BEGIN
    UPDATE
        Publicacion
    SET 
        IDPublicacion = _IDPublicacion,
        Mensaje = _Mensaje,
        Usuario_Carnet = _Usuario_Carnet,
        Fecha = _Fecha,
        Curso_Catedratico_idCatedraticoCurso = _Curso_Catedratico_idCatedraticoCurso,
        Curso_CodigoCurso = _Curso_CodigoCurso,
        Catedratico_NoCatedratico = _Catedratico_NoCatedratico,
        Tipo = _Tipo
    WHERE
        IDPublicacion = _IDPublicacion ; END $$

-- Eliminar

DELIMITER
    $$
CREATE PROCEDURE sp_EliminarPublicacion(
    IN _IDPublicacion INT
)
BEGIN
    DELETE
FROM
    Publicacion
WHERE
    IDPublicacion = _IDPublicacion;
END $$


-------------------- Comentario --------------------

--Listar Todos

DELIMITER
    $$
CREATE PROCEDURE sp_ListarComentarios(
)
BEGIN
    SELECT * FROM Comentario;
END $$

--Listar uno

DELIMITER
    $$
CREATE PROCEDURE sp_ListarComentario(
    IN _IDComentario INT
)
BEGIN
    SELECT * FROM Comentario WHERE IDComentario = _IDComentario;
END $$

--Agregar

DELIMITER
    $$
CREATE PROCEDURE sp_AgregarComentario(
    IN _IDComentario INT,
    IN _Mensaje VARCHAR(100),
    IN _Publicacion_IDPublicacion INT,
    IN _Usuario_Carnet INT
)
BEGIN
    INSERT INTO Comentario(
        IDComentario,
        Mensaje,
        Publicacion_IDPublicacion,
        Usuario_Carnet
    )
VALUES(
    _IDComentario,
    _Mensaje,
    _Publicacion_IDPublicacion,
    _Usuario_Carnet
) ; END $$

-- Editar

DELIMITER
    $$
CREATE PROCEDURE sp_EditarComentario(
    IN _IDComentario INT,
    IN _Mensaje VARCHAR(100),
    IN _Publicacion_IDPublicacion INT,
    IN _Usuario_Carnet INT
)
BEGIN
    UPDATE
        Comentario
    SET 
        IDComentario = _IDComentario,
        Mensaje = _Mensaje,
        Publicacion_IDPublicacion = _Publicacion_IDPublicacion,
        Usuario_Carnet = _Usuario_Carnet
    WHERE
        IDComentario = _IDComentario ; END $$

-- Eliminar

DELIMITER
    $$
CREATE PROCEDURE sp_EliminarComentario(
    IN _IDComentario INT
)
BEGIN
    DELETE
FROM
    Comentario
WHERE
    IDComentario = _IDComentario;
END $$
