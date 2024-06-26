import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//La idea de este archivo es crear la funcion main vacia, incluyendo la estructura try catch. Ejecutamos main al final del archivo. Una vez que tenemos eso, podemos empezar a crear las diferentes consultas que necesitemos. Vamos a ir creando, probando y comentando una por una. SIEMPRE con el prisma.$disconnect() al final de la consulta. Sería ideal ir mostrando en el pgAdmin como van impactando las diferentes consultas.

const main = async () => {


    try {

        // Creamos una camada
        // const camada = await prisma.camada.create({
        //     data: {
        //         nombre: 2717,
        //         dias: "Martes y jueves",
        //         modulo: "Backend",
        //     },
        // });
        // console.log(camada);

        //Creamos muchas camadas
        // const camadas = await prisma.camada.createMany({
        //     data: [
        //         {
        //             nombre: 2817,
        //             dias: "Martes y jueves",
        //             modulo: "React",
        //         },
        //         {
        //             nombre: 3117,
        //             dias: "Martes y jueves",
        //             modulo: "Javascript",
        //         },
        //         {
        //             nombre: 3317,
        //             dias: "Lunes y miercoles",
        //             modulo: "Javascript",
        //         },
        //     ],
        // });
        // console.log(camadas);
        

        //Traemos todas las camadas
        // const allCamadas = await prisma.camada.findMany();
        // console.log(allCamadas);


        //Traemos una camada por id
        // const camadaById = await prisma.camada.findUnique({
        //     where: {
        //         id: 6,
        //     },
        // });
        // console.log(camadaById);


        //Traemos camadas por nombre
        // const camadasByNombre = await prisma.camada.findMany({
        //     where: {
        //         dias: 'Martes y jueves',
        //     },
        // });
        // console.log(camadasByNombre);


        //Creamos un alumno
        // const alumno = await prisma.alumno.create({
        //     data: {
        //         nombre: "Juan Perez",
        //         mail: "juan@gmail.com",
        //         edad: 25,
        //         camada: 2717,
        //     },
        // });
        // console.log(alumno);

        //Creamos muchos alumnos
        // const alumnos = await prisma.alumno.createMany({
        //     data: [
        //         {
        //             nombre: "Paula Molina",
        //             mail: "paula@gmail.com",
        //             edad: 26,
        //             camada: 2817,
        //         },
        //         {
        //             nombre: "Romina Gomez",
        //             mail: "romina@hotmail.com",
        //             edad: 27,
        //             camada: 3117,
        //         }
        //     ]
        // })
        // console.log(alumnos);

        //Traemos alumnos por camada
        // const alumnosByCamada = await prisma.alumno.findMany({
        //     where: {
        //         camada: 2717,
        //     },
        // });
        // console.log(alumnosByCamada);

        //JOINS en prisma
        // Traemos todos los alumnos con sus camadas
        // const allAlumnos = await prisma.alumno.findMany({
        //     include: {
        //         camadas: true,
        //     },
        // });
        // console.log(allAlumnos);

        //Traemos solo algunos datos de los alumnos y algunos datos de las camadas sus camadas
        const allAlumnos = await prisma.alumno.findMany({
            select: {
                nombre: true,
                mail: true,
                camadas: {
                    select: {
                        nombre: true,
                        dias: true,
                    },
                },
            },
        });
        console.log(allAlumnos);
        

        //Desconectamos de la base de datos.
        prisma.$disconnect();



        } catch (error) {
            console.log(error);
            prisma.$disconnect();
    }
};

main();