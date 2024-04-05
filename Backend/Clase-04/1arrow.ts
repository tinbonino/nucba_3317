const sumar =(a: number, b:number): number=>a+b;

console.log(sumar(5,18));

const objeto={
    nombre:"juan",
    saludar: function(){
        console.log(`Bienvenido ${this.nombre}`)
    }
}

objeto.saludar();