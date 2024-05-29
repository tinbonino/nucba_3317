import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nucbazappi3317@gmail.com",
        pass: "Lalala24*",
    },
    from: "nucbazappi3317@gmail.com"
});


export const sendEmail= async (to:string, code: string): Promise<void> => {
    try {
        const mailOptions = {
            from: "NucbaZappi - nucbazappi3317@gmail.com",
            to,
            subject: "Codigo de verificación para tu cuenta",
            text: ` Llegó tu código para Nucba Zappi.
            El código es: ${code}`
        };

        await transporter.sendMail(mailOptions);
        console.log("Correo electrónico enviado");
    } catch (error) {
        console.error("Error al enviar el correo:",error);
    }
}