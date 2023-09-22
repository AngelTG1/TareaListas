import React from 'react'
import { useState } from 'react';

function Frutas() {
    const [fruits, setFruits] = useState(['manzana', 'pera']);

    const addFruit = (fruit) => {
      setFruits([...fruits, fruit]);
    };
  
    const removeFruit = () => {
      if (fruits.length > 0) {
        const shiftedElement = fruits.shift();
        setFruits([...fruits]); // Debes crear una nueva copia del array para que React detecte el cambio.
        console.log(`Eliminado: ${shiftedElement}`);
      }
    };
  
    return (
      <div>
        <h1>Lista de Frutas:</h1>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <button onClick={() => addFruit('banana')}>Agregar Banana</button>
        <button onClick={removeFruit}>Eliminar Primera Fruta</button>
      </div>
    );
}

export default Frutas