## Hashing
Hashing es un proceso que transforma una entrada (como una contraseña) en una cadena de caracteres de longitud fija, que típicamente parece ser una cadena aleatoria de caracteres. Esto se realiza mediante una función hash. Las propiedades clave del hashing son:

# Determinista: La misma entrada siempre produce la misma salida.
# Rápido de calcular: El hash de una entrada se puede calcular rápidamente.
# Difícil de revertir: Es computacionalmente inviable revertir el hash para obtener la entrada original.
# Colisiones difíciles de encontrar: Es poco probable que dos entradas diferentes produzcan el mismo hash.
Ejemplo de algoritmos de hashing comunes son MD5, SHA-1, y SHA-256. Sin embargo, para proteger contraseñas, es mejor usar algoritmos diseñados específicamente para este propósito, como bcrypt, scrypt, o Argon2.

## Salting
Salting es una técnica que añade una cadena aleatoria, llamada "sal", a la entrada (como una contraseña) antes de aplicar la función hash. Las propiedades del salting son:

Unicidad: Cada entrada (contraseña) tiene una sal única, lo que significa que incluso si dos usuarios tienen la misma contraseña, sus hashes serán diferentes debido a las diferentes sales.
Protección contra ataques de diccionario y precomputación: Al añadir sales únicas y aleatorias, se dificulta la creación de tablas de búsqueda precomputadas (como las tablas rainbow) que atacantes pueden usar para revertir hashes.