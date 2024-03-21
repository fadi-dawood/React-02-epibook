import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../../Context/ThemeContextProvider';
import { SearchContext } from '../../Context/SearchContextProvider';



export default function SearchBar({setActiveSearch}) {
    const [searchWorld, setSearchWorld] = useState("");

    const {setSearchTerm} = useContext(SearchContext);

    const updateSearch = () => {
        setSearchTerm(searchWorld);
        setActiveSearch(true);
    };

    const {theme} = useContext(ThemeContext);

    return (
        <Form.Group data-bs-theme={theme} bg={theme} className="mb-3 px-5 d-flex justify-contents-center ">
            <Form.Control
                value={searchWorld}
                type="text"
                placeholder="Search your book here..."
                onChange={(event) => setSearchWorld(event.target.value)}
            />
            <Button className='ms-3'  variant="primary" type="button" onClick={updateSearch}>
                Search
            </Button>
        </Form.Group>
    )
}