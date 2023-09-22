import React, { useState } from 'react';
import booksData from '../hooks/booksData.json';

const BookList = () => {
  const [books, setBooks] = useState(booksData);
  const [deletedBook, setDeletedBook] = useState(null);
  const maxBooks = 10;

  const addBookToList = () => {
    if (books.length < maxBooks) {
      const nextBookIndex = books.length;
  
      if (nextBookIndex < booksData.length) {
        const nextBookFromJSON = booksData[nextBookIndex];
        setBooks([...books, nextBookFromJSON]);
      } else {
        const newBook = {
          title: `Book ${nextBookIndex + 1}`,
          author: `Author ${nextBookIndex + 1}`,
          year: new Date().getFullYear() 
        };
        setBooks([...books, newBook]);
      }
    }
  };

  const removeBookFromList = () => {
    if (books.length > 0) {
      const [removedBook, ...updatedBooks] = books;
      setBooks(updatedBooks);
      setDeletedBook(removedBook);
    }
  };

  return (
    <div>
      <div className='btnContent'>
        <button className='btnApp' onClick={addBookToList}>Agregar a la lista</button>
        <button className='btnApp' onClick={removeBookFromList}>Quitar 1 de la lista</button>
      </div>

      <div className=' tabla'>
        <h2>Lista de Libros:</h2> 
        <table>
          <thead>
            <tr>
              <th>Año</th>
              <th>Título</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {books.map((book, index) => (
              <tr className='' key={index}>
                <td>{book.year}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;


