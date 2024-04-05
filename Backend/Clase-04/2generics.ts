function obtenerPrimerElemento<T>(array:T[]): T | undefined {
    if(array.length>0){
        return array[0];
    }
    return undefined;
}

const numeros: number[] = [1,2,3,4,5];
const primerNumero: number | undefined = obtenerPrimerElemento(numeros);
console.log(primerNumero);

const palabras: string[]=["Hola","amigos"];
const primerPalabra:string | undefined = obtenerPrimerElemento(palabras);
console.log(primerPalabra)