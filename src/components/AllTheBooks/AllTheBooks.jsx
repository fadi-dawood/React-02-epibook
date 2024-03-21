import React, { useContext, useState } from 'react'
import SingleBook from '../SingleBook/SingleBook';
import { Container } from 'react-bootstrap';
import './AllTheBooks.css'
import { ThemeContext } from '../../Context/ThemeContextProvider';
import { SearchContext } from '../../Context/SearchContextProvider';



function AllTheBooks({ Books, Category, NumOfBooks}) {

  const {searchTerm} = useContext(SearchContext);

  const ShuffleBooks = Books.sort(() => Math.random() - 0.5);

  const filteredBooks = ShuffleBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {searchTerm === "" ? (
        <div className={`m-0 ${theme === "dark" ? "bg-dark text-white" : ""}`} >
          <Container>
            <h2 className='mx-5 pt-5 mb-2'>
              {`${Category.charAt(0).toUpperCase() + Category.slice(1).toLowerCase()} Books`}
            </h2>
            <div className='row p-4 d-flex justify-content-center w-100'>
              {ShuffleBooks.slice(0, NumOfBooks).map((element, index) => (
                <SingleBook book={element} key={index} />
              ))}
            </div>
            <hr className="mx-5 my-0" />
          </Container>
        </div>
      ) :
        <div className={`m-0 ${theme === "dark" ? "bg-dark text-white" : ""}`} >
          <Container>
          <h2 className='mx-5 pt-5 mb-2'>
            {`Results: ${filteredBooks.length} Books`}
          </h2>
          <div className='row p-4 d-flex justify-content-center w-100'>
            {filteredBooks.map((element, index) => (
              <SingleBook book={element} key={index} />
            ))}
          </div>
          </Container>
        </div>
      }

    </div>
  );
}

export default AllTheBooks;
