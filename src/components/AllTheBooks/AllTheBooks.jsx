import React, { useContext, useEffect, useState } from 'react'
import SingleBook from '../SingleBook/SingleBook';
import { SearchContext } from '../../Context/SearchContextProvider';


// Si passa a questo componente:
//1- l'array dei libri da mostrare
//2- la categoria per l'intestazione della sezione
//3- il nemero dei libri da mostrare per ogni categoria selezionata 
function AllTheBooks({ Books, Category, NumOfBooks }) {

  // il valore dell'input della ricerca
  const { searchTerm } = useContext(SearchContext);
  // variabile per salvare l'array dei libri misti che va chiamata solo al primo caricamento del componente
  const [ShuffledBooks, setShuffledBooks] = useState([]);

  const [filteredBooks, setFilteredBooks] = useState([]);


  // mischiare i libri solo al primo caricamento del componente
  useEffect(() => {

    // mischiare l'array dei libri in modo random
    const Shuffled = Books.sort(() => Math.random() - 0.5);

    setShuffledBooks(Shuffled);

  }, [])



  useEffect(() => {
    // filtrare l'array nel caso di ricerca
    const filtered = ShuffledBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm, ShuffledBooks]);


  return (
    <div>
      {searchTerm === "" ? (

        // se l'utente non sta cercando libri

        <>
          <h2 className='mx-5 pt-5 mb-2'>
            {`${Category.charAt(0).toUpperCase() + Category.slice(1).toLowerCase()} Books`}
          </h2>
          <div className='row p-4 d-flex justify-content-center w-100'>
            {ShuffledBooks.slice(0, NumOfBooks).map((element, index) => (
              <SingleBook book={element} key={index} />
            ))}
          </div>
          <hr className="mx-5 my-0" />
        </>

      ) :

        // se l'utente sta cercando libri

        <>
          <h2 className='mx-5 pt-5 mb-2'>
            {`Results: ${filteredBooks.length} Books`}
          </h2>
          <div className='row p-4 d-flex justify-content-center w-100'>
            {filteredBooks.map((element, index) => (
              <SingleBook book={element} key={index} />
            ))}
          </div>
        </>

      }

    </div>
  );
}

export default AllTheBooks;
