interface Persona {
    nombre: string;
    edad: number;
    direccion: string;
}

function actualizarPersona(persona:Persona, cambios: Partial<Persona>): Persona {
    return {...persona,...cambios};
}

// Uso de la función actualizarPersona con un objeto parcial

const alumno: Persona={
    nombre:"Juan",
    edad: 25,
    direccion: "Empanada 222"
};

const cambios: Partial<Persona>={
   
    edad:33
}

const estudianteActualizado= actualizarPersona(alumno,cambios);

console.log(estudianteActualizado);