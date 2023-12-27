import React,{ useContext } from 'react';
import { CounterContext } from './context';


const Counter = () => {
  // Usamos useContext para acceder al estado del contador
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementar</button>
    </div>
  );
};

export default Counter;
