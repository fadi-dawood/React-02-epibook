import React, { useContext } from 'react'
import SingleBook from '../SingleBook/SingleBook';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../../Context/ThemeContextProvider';
import { SearchContext } from '../../Context/SearchContextProvider';


// Si passa a questo componente:
//1- l'array dei libri da mostrare
//2- la categoria per l'intestazione della sezione
//3- il nemero dei libri da mostrare per ogni categoria selezionata 
function AllTheBooks({ Books, Category, NumOfBooks }) {
  // la thema del sito
  const { theme } = useContext(ThemeContext);

  // il valore dell'input della ricerca
  const { searchTerm } = useContext(SearchContext);

  // mischiare l'array dei libri in modo random
  const ShuffleBooks = Books.sort(() => Math.random() - 0.5);

  // filtrare l'array nel caso di ricerca
  const filteredBooks = ShuffleBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })




  
  return (
    <div>
      {searchTerm === "" ? (

        // se l'utente non sta cercando libri

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

        // se l'utente sta cercando libri

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
