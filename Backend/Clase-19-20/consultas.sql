-- Creamos tabla
CREATE TABLE camadas (
	id serial not null primary key,
	nombre varchar(5),
	dias varchar(255)
);

-- Traemos todo de la tabla
SELECT * FROM camadas;

-- Insertamos data en la tabla
INSERT INTO camadas (nombre, dias) VALUES (2717, 'Martes y jueves');

SELECT * FROM camadas;