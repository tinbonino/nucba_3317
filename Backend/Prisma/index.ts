import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    

    try {

        // Creamos una camada

        const camada = await prisma.camada.create({
            data: {
                nombre: 2717,
                dias: "Martes y Jueves",
                modulo: "Backend"
            }
        });
        console.log(camada);

        prisma.$disconnect()

        } catch (error){
        console.log(error);
        prisma.$disconnect();
    }


};

main();