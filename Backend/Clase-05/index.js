import { get,save } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptNewUser } from "./userPrompts.js";

const main = async ()=>{
    let run=true;
    while(run){
        const action=await inquirer.prompt([
            {
                type:"list",
                name:"chosen",
                message:"Elija por favor:",
                choices: [
                    {value:1,name:"Obtener todos los usuarios"},
                    {value:2,name:"Crear un nuevo usuario"},
                    {value:99,name:"Salir"}
                ],
            },

        ]);
        switch(action.chosen) {
            case 1:
                await getAllUsers();
                break;
            case 2:
                await createNewUser();
                break;
            case 99:
                run=false;
                break;
            default:
                run=false;
                break;
        }
    }
    console.log("Adios, muchas gracias por utilizar Userify®")
};

main();


async function createNewUser(){
    console.log("Agregando nuevo usuario...");
    const newUserData=await promptNewUser();
    console.log("Creando:",newUserData);
    const currentUsers=await get("users");
    //Aca podes agregar una funcion de validacion para newUserData
    currentUsers.push(newUserData);
    await save("users",currentUsers);
}

async function getAllUsers() {
    const currentUsers=await get("users");
    console.log(currentUsers);
}