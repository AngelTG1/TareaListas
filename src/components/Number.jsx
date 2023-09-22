import React, { useEffect } from 'react'
import Button from './Button';
import { useState } from 'react';

function Number() {
    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const [mensaje, setMensaje] = useState('')
    

    const [comments, setComments] = useState([]);
    const [titulo, setTitulo] = useState("")
    const [anios, setAnios] = useState("")
    const [newComment, setNewComment] = useState("");
  
    const incrementCount = () => {
      setCount(count + 1);
      setNumbers([...numbers, count + 1]);
      setMensaje('Se hizo click en boton')
      
    };

    const handleCommentChange = (e) => {
      setAnios(e.target.value);
      setTitulo(e.target.value)
      setNewComment(e.target.value);
      
    }

    const handleCommentSubmit = (event) => {
      event.preventDefault();
      setComments([...comments, newComment]);
      setNewComment("");
    };
  
    const decrementNumbers = () => {
      if (count > 0) {
        setCount(count - 1);
        setNumbers(numbers.slice(0, numbers.length - 1));
      }
    }
  
    return (
      <div className='containerApp'>
        <h1>Contador: {count}</h1>
        <div className='containerBtn'>
          <Button onClick={incrementCount} name="Incrementar"/>
          <Button onClick={decrementNumbers} name="Decrementar"/>
        </div>
        {/* <p>{mensaje}</p> */}
        <input className='inputApp' type="text" value={mensaje} readOnly />
        <ul className='listApp'>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
        
        <form onSubmit={handleCommentSubmit} >
          <input type="number" placeholder='number ' className='inputApp' onChange={ handleCommentChange} />
          <input type="text" placeholder='titulo ' className='inputApp' onChange={ handleCommentChange} />
          <input type="text" placeholder='autor ' className='inputApp' onChange={ handleCommentChange} />
        </form>
        <div>
          {comments.map((coment, index) => (
              <p key={index}>{coment}, {titulo}, {anios}</p>
          ))}  
        </div>
        
      </div>
    );
}

export default Number;