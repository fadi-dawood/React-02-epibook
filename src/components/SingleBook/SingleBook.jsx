import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css'
import { Col } from 'react-bootstrap';
import { ThemeContext } from '../../Context/ThemeContextProvider';
import { LatestReleaseContext } from '../../Context/LatestReleaseContextProvider';


export default function SingleBook({ book }) {

    // impostare la thema dell'App
    const { theme } = useContext(ThemeContext);

    // le proprs passati da AllTheBooks (l'oggetto del libro)
    const { img, price, category, title, asin } = book;

    // selectedBook: l'id del libro selezionato dall'utente
    // setVisibleCommentArea: aggirnare la visibilita del CommentArea
    const { selectedBook, setSelectedBook, setVisibleCommentArea } = useContext(LatestReleaseContext)

    // quando si clicca su "Show comments/Hide Comments"
    function selectBook() {
        setSelectedBook(asin);
        setVisibleCommentArea(true);
    }


    return (
        <Col lg={3} md={6} sm={6} xs={10} className='mb-2'>
            <Card className={`card-container border-0 m-2 ${selectedBook === asin ? "selected-card" : ""} ${theme === "dark" ? "bg-dark text-white" : ""}`}>
                <Card.Img className='book-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='book-title'>{title}</Card.Title>
                    <Card.Text>{price} $</Card.Text>
                    <Card.Text>{category}</Card.Text>
                    <Button variant={selectedBook === asin ? `danger` : `primary`} onClick={selectBook}>
                        {selectedBook === asin ? `Hide comments` : `Show comments`}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
