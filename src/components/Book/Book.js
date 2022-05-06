import React from 'react';
import Bookitem from './Bookitem';
let books = ['Halqa', 'Baxtiyor oila', 'Iymon', 'Hadis va hayot']

const Books = () => {
  return (
    <div className='App'>
      <h2>Books list</h2>
      <ul>
        {books.map((book, i) => {
          return <Bookitem key={i} itemName={book} />
        })}
      </ul>
    </div>
  )
}

export default Books;