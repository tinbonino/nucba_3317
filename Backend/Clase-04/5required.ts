interface Auto {
    marca?: string;
    modelo?: string;
    puertas?: number;
}

function crearAuto(auto: Required<Auto>): void {
    console.log(auto);
}

// Uso de la función crearAuto con un objeto requerido
const auto: Required<Auto> = {
    marca: "Ford",
    modelo: "Mustang",
    puertas: 2,
};

crearAuto(auto);
