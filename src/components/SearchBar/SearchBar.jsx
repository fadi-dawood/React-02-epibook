import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../../Context/ThemeContextProvider';
import { SearchContext } from '../../Context/SearchContextProvider';



export default function SearchBar() {

    // impostare la thema dell'App
    const { theme } = useContext(ThemeContext);

    // variabile locale per salvare il valore dell'input di ricerca
    const [searchWorld, setSearchWorld] = useState("");

    // variabile generale per salvare il valore dell'input di ricerca
    const { setSearchTerm } = useContext(SearchContext);

    // quando si clicca su "Search"
    const updateSearch = () => {
        setSearchTerm(searchWorld);
    };


    return (
        <Form.Group data-bs-theme={theme} bg={theme} className="mb-3 px-5 d-flex justify-contents-center ">
            <Form.Control
                value={searchWorld}
                type="text"
                placeholder="Search your book here..."
                onChange={(event) => setSearchWorld(event.target.value)}
            />
            <Button className='ms-3' variant="primary" type="button" onClick={updateSearch}>
                Search
            </Button>
        </Form.Group>
    )
}