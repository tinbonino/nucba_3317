import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date",DatePrompt);

export async function promptNewUser(){
    return await inquirer.prompt(newUserPrompt);
}


const newUserPrompt = [
    {
        type:"input",
        name:"document",
        message:"Ingrese su DNI:"
    },
    {
        type:"input",
        name:"full_name",
        message:"Ingrese su nombre completo:"
    },
    {
        type:"date",
        name:"birth_date",
        message: "Ingrese su fecha de nacimiento:",
        locale:"es-ES",
        format:{month:"short",hour:undefined,minute:undefined},
    },
    {
        type:"input",
        name:"nationality",
        message:"Ingrese su nacionalidad:"
    },
];