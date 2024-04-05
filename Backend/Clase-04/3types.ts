type Coordenadas = {
    x: number;
    y: number;
};

type Color= "rojo" | "verde" | "azul";

type Punto= Coordenadas & {
    color:Color;
};

const punto: Punto= {
    x:3,
    y:20,
    color:"verde",
}

console.log(punto)
// Estoy uniendo coordenadas (que es un objeto) con otra propiedad cuyo tipo es color.


interface Animal {
    nombre:string;
    comer():void; // void es vacio. Como el metodo no retornará nada, debo indicarlo.
}

interface Mascota  extends Animal {
    jugar():void;
}

// La interfaz mascota tendrá la propiedad nombre y el método comer heredado de Animal y ademas el método jugar()

class Perro implements Mascota {
    nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    comer(){
        console.log(`${this.nombre} está comiendo`);
    }

    jugar(){
        console.log(`${this.nombre} está jugando`)
    }
}

const miPerro= new Perro("Pepe");

miPerro.comer();
miPerro.jugar();

const Perro2=new Perro("Walter");

Perro2.comer()

