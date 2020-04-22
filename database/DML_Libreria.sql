CREATE SCHEMA biblioteca;

CREATE TABLE Libro(
	IdLibro serial NOT NULL,
    Titulo varchar(60) not null,
    Editorial varchar(20) not null,
    Area varchar(30) not null,
    constraint pk_Libro primary key(IdLibro)
);

CREATE TABLE Autor(
	IdAutor serial not null,
    Nombre varchar(80) not null,
    Nacionalidad varchar(40) not null,
    constraint pk_Autor primary key(IdAutor)
);

CREATE TABLE LibAut(
	IdAutor int not null,
    IdLibro int not null,
    constraint fk_LibAut_Autor foreign key(IdAutor) references Autor(IdAutor),
    constraint fk_LibAut_Libro foreign key(IdLibro) references libro(IdLibro)
);


CREATE table Estudiante(
	IdLector serial not null,
    CI varchar(30) not null,
    Nombre varchar(60) not null,
    Direccion varchar(100) not null,
    Carrera varchar(30) not null,
    Edad int not null,
    constraint pk_Estudiante primary key(IdLector)
);

create table prestamo(
	IdLector int not null,
    IdLibro int not null,
    FechaPrestamo timestamp not null,
    FechaDevolucion timestamp not null,
    Devuelto boolean not null,
    constraint fk_prestamo_Estudiante foreign key(IdLector) references Estudiante(IdLector),
    constraint fk_prestamo_Libro foreign key(IdLibro) references libro(IdLibro)
);