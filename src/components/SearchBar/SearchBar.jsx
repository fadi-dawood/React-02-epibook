import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function SearchBar({setSearchTerm}) {
    const [searchWorld, setSearchWorld] = useState("");

    const updateSearch = () => {
        setSearchTerm(searchWorld);
      };

    return (
        <Form.Group className="m-5 px-5 d-flex justify-contents-center ">
            <Form.Control
                value={searchWorld}
                type="text"
                placeholder="Search your book here..."
                onChange={(event) => setSearchWorld(event.target.value)}
            />
            <Button variant="primary" type="button" onClick={updateSearch}>
                Search
            </Button>
        </Form.Group>
    )
}
