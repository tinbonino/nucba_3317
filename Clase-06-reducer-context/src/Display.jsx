import React, { useContext } from 'react';
import { CounterContext } from './context';

function Display() {
  const { state } = useContext(CounterContext); // Obtén el valor del contador desde el contexto

  return (
    <div>
      <h2>Valor del Contador: {state.count}</h2>
    </div>
  );
}

export default Display;
