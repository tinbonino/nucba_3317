// import http from "http";
// const PORT = 8080;

// const server=http.createServer(async (req,res) => {
//   if (req.url === "/" && req.method==="GET") {
//     res.writeHead(200, {"Content-Type": "application/json"})
//     res.write(JSON.stringify({msg: "Hola! Soy el home!"}))
//     res.end();
//     console.log("Petición GET concretada")
//     return
// };

// if(req.url === "/anidado" && req.method==="GET") {
//     res.writeHead(200, {"Content-Type": "application/json"})
//     res.write(JSON.stringify({msg: "Hola! Soy  una ruta anidada"}))
//     res.end();
//     console.log("Petición GET concretada")
//     return
// }

// if (req.url=== "/" && req.method==="POST"){
//     res.writeHead(200, {"Content-Type": "application/json"})
//     res.write(JSON.stringify({msg: "Yo soy un post"}))
//     res.end();
//     console.log("Petición POST concretada")
//     return
//   }

//     res.writeHead(404, {"Content-Type": "application/json"})
//     res.write(JSON.stringify({msg: "Che, acá no hay nada"}))
//     res.end();
//     return

// });

// server.listen(PORT, () => {
//   console.log("Servidor escuchando en el puerto ",PORT)
// })


import  express  from "express";
const app = express();
const PORT = 8080;

// servir contenido estático

app.use(express.static("public"));

// app.get("/",(req,res) => {
//     res.send("Hola! Soy el home")
  
// })

app.get("/prueba",(req,res) => {
  res.sendFile(__dirname+"/public/prueba.html")
})

app.get("/",(req,res) => {
  res.sendFile(__dirname+"/index.html")
})

app.get("/elements",(req,res) => {
  res.sendFile(__dirname+"/public/elements.html")
})

app.get("/generic",(req,res) => {
  res.sendFile(__dirname+"/public/generic.html")
})

app.get("*",(req,res) => {
  res.sendFile(__dirname+"/public/404.html")
})



app.listen(PORT,() => {
  console.log("Servidor corriendo en el puerto",PORT)
})