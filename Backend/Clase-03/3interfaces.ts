// Interfaces

// Definición de una interfaz

interface Persona {
    nombre:string;
    edad:number;
}

let persona: Persona={
    nombre:"Jonathan",
    edad:28
};


console.log(persona.nombre);
console.log(persona.edad);

//interfaces en funciones

//Creo la interface (predefino los tipos)
interface Calculadora {
    sumar(a:number,b:number):number;
    restar(a:number,b:number):number;
}


//Defino las funciones

let calculadora: Calculadora={
    sumar(a,b){
        return a+b;
    },
    restar(a,b){
        return a-b;
    }
};

console.log(calculadora.sumar(5,3))
console.log(calculadora.restar(5,3))
