import { useState, useEffect } from "react"
import { ClickButton } from "../EjemploUseState/EjemploUseState"

function EjemploUseEffect() {

    const [click,setClick]=useState(false);

    const clickHandler= ()=>{
        setClick(!click);
    }


    useEffect(()=>{
        console.log("Fase de montaje (primer render)")
    },[])

    useEffect(()=>{
        console.log("El estado cambió")
    },[click])



  return (
    <div>
        <span>
            {
                click ? "True" : "False"
            }
        </span>
        <ClickButton onClick={clickHandler}>Click</ClickButton>
    </div>
  )
}

export default EjemploUseEffect