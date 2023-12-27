import { useReducer } from "react";

const EjemploUseReducer =()=>{

    const initialState = "steelblue";

    const reducer = (state, action) => {
        switch (action.type) {
            case 'rojo':
                return '#e63946';
            case 'verde':
                return '#2a9d8f';
            case 'azul':
                return '#0081a7';
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2 style={{color: state}} >Soy un titulo!</h2>
            <button onClick={()=>dispatch({type:"rojo"})}>Rojo</button>
            <button onClick={()=>dispatch({type:"verde"})}>verde</button>
            <button onClick={()=>dispatch({type:"azul"})}>azul</button>
            
        </div>
    )

}

export default EjemploUseReducer