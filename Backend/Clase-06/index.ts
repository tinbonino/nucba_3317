interface Empleado {
    id: number;
    nombre: string;
    cargo: string;
    sueldo: number;
}

class ClaseEmpleado implements Empleado {

    constructor(
        public id:number,
        public nombre:string,
        public cargo:string,
        public sueldo:number
    ) {}
}

class ClaseDirector extends ClaseEmpleado {
    constructor(
         id:number,
         nombre:string,
         cargo:string,
         sueldo:number,
         public area:string
    ) {
        super(id,nombre,cargo,sueldo)
    }

    contratar(nuevoEmpleado: Empleado) {
        console.log(`Contratando nuevo empleado ${nuevoEmpleado.nombre} para el área ${this.area}.`);
        // Lógica para contratar al empleado
    }
}

const empleado1:Empleado = new ClaseEmpleado(14,"Pepe","Secretario",1500000)
const empleado2:Empleado = new ClaseEmpleado(15,"Ruben","Maestranza",1000000)

const director1:ClaseDirector= new ClaseDirector(25,"Lorena","Director",25555555,"Finanzas")

director1.contratar(empleado1)
director1.contratar(empleado2)
director1.contratar(new ClaseEmpleado(16,"Florencia","Recepcionista",2500000))


// console.log("Datos del empleado");
// console.log("ID:",empleado1.id)
// console.log("Nombre:",empleado1.nombre)
// console.log("Cargo:",empleado1.cargo)
// console.log("Sueldo:",empleado1.sueldo)
// console.log("Datos del empleado");
// console.log("ID:",empleado2.id)
// console.log("Nombre:",empleado2.nombre)
// console.log("Cargo:",empleado2.cargo)
// console.log("Sueldo:",empleado2.sueldo)

console.table(empleado2)
console.table(empleado1)
console.table(director1)