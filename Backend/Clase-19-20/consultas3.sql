DROP TABLE camada 


CREATE TABLE camada (
	id serial not null primary key,
	nombre int not null unique,
	dias varchar(150) not null,
	modulo varchar(100) not null
);

CREATE TABLE alumno (
	id serial not null primary key,
	nombre varchar(255) not null,
	mail varchar(150) not null,
	edad int not null,
	camada int,
	foreign key(camada) references camada(nombre)
);

--Insertar varios valores en una sola query

INSERT INTO camada (nombre, dias, modulo)
VALUES
	(2717, 'Martes y jueves', 'Backend'),
	(2817, 'Lunes y miercoles', 'React'),
	(2617, 'Lunes y miercoles', 'Backend'),
	(3217, 'Martes y jueves', 'Javascript');

INSERT INTO alumno (nombre, mail, edad, camada)
VALUES
	('Juan', 'juan@gmail.com', 32, 2717),
	('Romina', 'romina@gmail.com', 34, 2817),
	('Lucas', 'lucas@gmail.com', 28, 2617),
	('Martina', 'martina@hotmail.com', 26, 2717),
	('Jose', 'jose@hotmail.com', 29, 3217),
	('Aldana', 'aldana@hotmail.com', 24, 2817);


--Comenzamos con left join. Traeme TODOS los registros de la tabla de la izquierda y solo los que esten relacionados a estos de la tabla de la derecha.

--Vemos como darle apodos a las tablas

SELECT a.id, a.nombre FROM alumno a;

--Select el id y nombre de alumnos. Traeme tambien el nombre, dias y modulos cuyo a.camada coincida con c.nombre
SELECT a.id, a.nombre, c.nombre, c.dias, c.modulo FROM alumno a left join camada c on a.camada = c.nombre;

--Agregamos una nueva camada
INSERT INTO camada (nombre, dias, modulo) values (3317, 'Lunes y miercoles', 'Javascript');

--Repetimos el left join de arriba para mostrar como no aparece esa camada en ningun lado, ya que nSELEingun alumno la tiene asignada
SELECT a.id, a.nombre, c.nombre, c.dias, c.modulo FROM alumno a left join camada c on a.camada = c.nombre;

--Agregamos un nuevo alumno sin camada
INSERT INTO alumno (nombre, mail, edad) values ('Adrian', 'adrian@gmail.com', 23);

--Repetimos el left join de arriba para mostrar como aparece Adrian a pesar de no tener camada ya que traemos TODO lo de la tabla de la izquierda aunque no tenga datos relacionados con la tabla de la derecha
SELECT a.id, a.nombre, c.nombre, c.dias, c.modulo FROM alumno a left join camada c on a.camada = c.nombre;

--Vamos con el right join, que tendria la misma logica que el left join, solo que va a traer TODOS los datos de la tabla de la derecha y solo los elementos relacionados de la tabla de la izquierda. Armamos la misma consulta, pero con right join
SELECT a.id, a.nombre, c.nombre, c.dias, c.modulo FROM alumno a right join camada c on a.camada = c.nombre;

--Inner join. Solo nos va a traer los elementos cuta data este relacionada. No va a traer el alumno sin camada, ni la camada sin alumnos

SELECT a.id, a.nombre, c.nombre, c.dias, c.modulo FROM alumno a inner join camada c on a.camada = c.nombre;

--Notamos como, en camadas, tenemos repeticion en el campo de dias. Podemos ver cuantas camadas hay para cada dia.

--Mostrame la columna dias y cuantos elementos hay de ese dia agrupado por dias
SELECT dias, count(dias) FROM camada group by dias;

--Podemos combinar esto con los joins. Obtener cuantos alumnos cursan cada dia

SELECT c.dias, count(c.dias) FROM camada c left join alumno a on a.camada = c.nombre group by c.dias;

--Obtener cuantos alumnos tengo por camada

SELECT c.nombre, count(c.nombre) FROM camada c left join alumno a on a.camada = c.nombre group by c.nombre;