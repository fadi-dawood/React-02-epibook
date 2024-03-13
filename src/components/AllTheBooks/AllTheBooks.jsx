import React, { useState } from 'react'
import SingleBook from '../SingleBook/SingleBook';
import './AllTheBooks.css'



function AllTheBooks({ Books, Category, NumOfBooks, searchTerm }) {
  const ShuffleBooks = Books.sort(() => Math.random() - 0.5);

  const filteredBooks = ShuffleBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div>
      {searchTerm === "" ? (
        <>
          <h2 className='mx-5 mt-5 mb-2'>
            {`${Category.charAt(0).toUpperCase() + Category.slice(1).toLowerCase()} Books`}
          </h2>
          <div className='row p-4 d-flex justify-content-center w-100'>
            {ShuffleBooks.slice(0, NumOfBooks).map((element, index) => (
              <SingleBook book={element} i={index} />
            ))}
          </div>
          <hr className="mx-5"/>
        </>
      ) :
        <>
          <h2 className='mx-5 mt-5 mb-2'>
            {`Results: ${filteredBooks.length} Books`}
          </h2>
          <div className='row p-4 d-flex justify-content-center w-100'>
            {filteredBooks.map((element, index) => (
              <SingleBook book={element} i={index} />
            ))}
          </div>
        </>
      }

    </div>
  );
}

export default AllTheBooks;
