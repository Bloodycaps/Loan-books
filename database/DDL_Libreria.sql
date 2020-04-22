use biblioteca;
SELECT 
    *
FROM
    Estudiante
WHERE
    carrera = 'Informatica';


SELECT nombre, edad
FROM
    Estudiante;
    
select autor.IdAutor, autor.nombre, COUNT(*) AS cantidad_Libros
from autor 
inner join LibAut ON autor.IdAutor = LibAut.IdAutor
inner join Libro ON LibAut.IdLibro = Libro.IdLibro
group by IdAutor
having cantidad_Libros > 2
;

select nombre 
from estudiante
where nombre like '% G%'
;

select group_concat(autor.nombre) AS autores
from autor 
inner join LibAut ON autor.IdAutor = LibAut.IdAutor
inner join Libro ON LibAut.IdLibro = Libro.IdLibro
where libro.Titulo = 'Visual Studio Net'
;

select *
from Autor
where nacionalidad = 'USA' or 'Francia'
;


select *
from Libro
where libro.Area != 'Internet'
;

select estudiante.nombre, group_concat(libro.Titulo) AS libro_prestado
from Libro
inner join prestamo ON prestamo.IdLibro = libro.IdLibro
inner join estudiante ON prestamo.IdLector = estudiante.IdLector
where Estudiante.nombre = 'Felipe Loayza Beramendi'
;

select *
from estudiante
inner join prestamo ON prestamo.IdLector = estudiante.IdLector
inner join libro ON prestamo.IdLibro = libro.IdLibro
where libro.area = 'bases de datos'
;

insert into estudiante (CI,Nombre, Direccion, Carrera, Edad)
values ('fds', 'David','fdsalkñjfas', 'Informatica',23);

insert into estudiante (CI,Nombre, Direccion, Carrera, Edad)
values ('fds', 'Felipe Loayza Beramendi','fdsalkñjfas', 'Sociales',25);

insert into estudiante (CI,Nombre, Direccion, Carrera, Edad)
values ('fds', 'David','fdsalkñjfas', 'Informatica',20);

insert into estudiante (CI,Nombre, Direccion, Carrera, Edad)
values ('fds', 'Santiago','fdsalkñjfas', 'Arquitectura',23);