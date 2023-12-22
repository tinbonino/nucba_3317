import { ClickButton } from "../EjemploUseState/EjemploUseState";



function EjemploOnSubmit() {

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Formulario enviado")
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" />
        <ClickButton>Enviar</ClickButton>
    </form>
  )
}

export default EjemploOnSubmit