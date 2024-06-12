--Generamos algunas filas mas

INSERT INTO camadas (nombre, dias) VALUES (2817, 'Lunes y miercoles');

INSERT INTO camadas (nombre, dias) VALUES (3017, 'Lunes y miercoles');

INSERT INTO camadas (nombre, dias) VALUES (1617, 'Martes y jueves');

INSERT INTO camadas (nombre, dias) VALUES (1717, 'Martes y jueves');


--Aprendemos sobre el where

SELECT * FROM camadas WHERE id = 3;

SELECT * FROM camadas WHERE dias = 'Martes y jueves';


--Seleccionamos campos con dos condiciones

SELECT * FROM camadas WHERE dias = 'Martes y jueves' AND id > 3;


--Actualizando registros

UPDATE camadas SET dias = 'Sabados' WHERE nombre = '3017';

--Actualizando TODOS los registros. (Famoso meme de falta de WHERE en SQL)

UPDATE camadas SET dias = 'Sabados';

--Vamos con el DELETE sin el WHERE (El verdadero meme)

DELETE from camadas;

--Delete de muchas filas por valor de columna

DELETE from camadas where dias = 'Martes y jueves';

--Delete mas "seguro" de una única fila

DELETE from camadas where id = 4;

--Llegado este punto, ya vimos las 4 acciones básicas de un CRUD.
--Vamos a eliminar la tabla de camadas y crear otra tabla que nos va a ayudar a realizar consultas de manera mas especifica.

DROP table camadas;

CREATE TABLE alumno (
	id serial not null primary key,
	nombre varchar(255) not null,
	mail varchar(150) not null,
	edad int not null
);

INSERT INTO alumno (nombre, mail, edad) values ('Jose', 'jose@hotmail.com', 31);

INSERT INTO alumno (nombre, mail, edad) values ('Juan', 'juan@gmail.com', 24);

INSERT INTO alumno (nombre, mail, edad) values ('Paola', 'paola@hotmail.com', 33);

INSERT INTO alumno (nombre, mail, edad) values ('Martina', 'Martina@gmail.com', 29);


--limit: Limita la cantidad de filas que nos retorna de query

SELECT * from alumno limit 2;

--where: Devuelve los alumnos segun la condicion dada

SELECT * from alumno where edad > 29;
SELECT * from alumno where edad >= 29;

--and: Devuelve los alumnos que cumplan con todas las condiciones dadas

SELECT * from alumno where edad > 29 and nombre = 'Jose';

--or: Devuelve todos los alumnos que cumplan con ambas condiciones

SELECT * from alumno where edad > 29 or nombre = 'Martina';

--negacion: Devuelve todos los alumnos que no cumplan con la condicion

SELECT * from alumno where nombre != 'Jose';

--Between: Para numeros. Trae los alumnos que se encuentren entre X e Y

SELECT * from alumno where edad between 28 and 32;

--Like: Para busquedas por coincidencia parcial

SELECT * from alumno where mail like '%hotmail%';
SELECT * from alumno where mail like '%gmail.com';
SELECT * from alumno where mail like 'paola%';

--OrderBy

SELECT * from alumno order by edad asc;
SELECT * from alumno order by edad desc;
SELECT * from alumno order by nombre asc;

--Tambien puedo seleccionar solo las columnas que me interesen, no necesariamente traerme todas

SELECT id, nombre from alumno;

--Tambien podemos darle apodos a la columna

SELECT id, nombre as name from alumno;