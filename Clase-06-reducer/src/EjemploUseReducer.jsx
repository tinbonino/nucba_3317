import { useReducer } from "react";



function EjemploUseReducer() {
// valor inicial del estado
    const initialState = "steelblue";
// Función reductora
    const reducer = (state,action)=>{
        switch(action.type){
            case "rojo":
                return "#e63946";
            case "verde":
                return "#2a9d8f";
            case "azul":
                return "#0081a7";
            default:
                return state;
        }
    }

    // Invocamos useReducer

    const [state,dispatch]= useReducer(reducer,initialState);

  return (
    <div>
        <h2 style={{color:state}}>Soy un título que cambia de color</h2>
        <button onClick={()=>dispatch({type:"rojo"})}>Rojo</button>
        <button onClick={()=>dispatch({type:"verde"})}>verde</button>
        <button onClick={()=>dispatch({type:"azul"})}>azul</button>
    </div>
  )
}

export default EjemploUseReducer