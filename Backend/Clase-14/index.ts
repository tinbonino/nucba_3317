import jwt from "jsonwebtoken"

// // Interface

// interface IObjetoAGuardar {
//     id: number,
//     username: string,
//     isAdmin: boolean
// };

// // OBjeto

// const objetoAGuardar: IObjetoAGuardar ={
//     id: 123,
//     username:"Empanada",
//     isAdmin: false
// }

// //Clave secreta

// const miClaveSecreta= "123Empa456nada";

// //firmo el token

// // const tokenFirmado= jwt.sign(objetoAGuardar,miClaveSecreta);

// // console.log(tokenFirmado);

// const generarJWT = (datoAGuardar:IObjetoAGuardar) => {
//     return new Promise((res,rej) => {
//       jwt.sign(datoAGuardar,miClaveSecreta, {
//         expiresIn:"5s"
//       }, (err,token) => {
//             if(err){
//                 console.log(err);
//                 rej("Se rompio todo");
//             } else {
//                 console.log("Token generado correctamente");
//                 res(token);
//             }
//       })
//     })
// }

// (async () => {
//     const respuesta=await generarJWT(objetoAGuardar);
//     console.log(respuesta);
// } )()

// const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6IkVtcGFuYWRhIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcxNTkwNDcxMCwiZXhwIjoxNzE1OTA0NzE1fQ.Wvby1h7OPKGSuYj7hJ0uVVaq_9G3nL-6PqPnkToZuJI"


// const dataVerificada = jwt.verify(token, miClaveSecreta)

// console.log("La data esta verificada:",dataVerificada)


//bcryptjs

import bcryptjs from "bcryptjs";

const contraseñaAEncriptar= "MiContraseñaReLoca";

const salt = bcryptjs.genSaltSync(16);

console.log("Salt");
console.log(salt);

const contraseñaEncriptada = bcryptjs.hashSync(contraseñaAEncriptar,salt);

console.log("contraseña encriptada:")
console.log(contraseñaEncriptada);



