import { useRef } from "react"
import { ClickButton } from "../EjemploUseState/EjemploUseState"


function EjemploUseRef() {

    const title = useRef();

    const handleTitle=()=> {
        title.current.style.color = "crimson";
    }
  return (
    <>
        <h2 ref={title} >Hola!</h2>
        <ClickButton onClick={handleTitle}  >Cambiar color</ClickButton>
    </>
  )
}

export default EjemploUseRef