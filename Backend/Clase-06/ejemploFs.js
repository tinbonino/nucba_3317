const fs = require("fs");

// Escribir en un archivo

fs.writeFile("archivo.txt","Que fea es la consola a la derecha",(err)=>{
    if(err){
        console.error("Error al escrribir el archivo: ",err)
        return;
    }
    console.log("se ha escrito en el archivo correctamente")
});

//Leer desde un archivo

fs.readFile("archivo.txt","utf8",(err,data) => {
  if(err){
    console.error("Error al leer el archivo:",err);
    return;
  }
  console.log("El contenido del archivo es:",data);
});