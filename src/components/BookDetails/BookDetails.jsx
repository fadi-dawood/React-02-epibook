import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import "./BookDetails.css"

import FantasyBooks from '../../DATA/fantasy.json'
import HistoryBooks from '../../DATA/history.json'
import HorrorBooks from '../../DATA/horror.json'
import RomanceBooks from '../../DATA/romance.json'
import ScifiBooks from '../../DATA/scifi.json'
import { Container } from 'react-bootstrap';
import CommentArea from '../CommentArea/CommentArea';
import { LatestReleaseContext } from '../../Context/LatestReleaseContextProvider';
import { ThemeContext } from '../../Context/ThemeContextProvider';


export default function BookDetails() {

    // la thema del sito
    const { theme } = useContext(ThemeContext);

    const { setVisibleCommentArea } = useContext(LatestReleaseContext);

    // ottenere l'id del libro da mosrare dal URL
    const { id } = useParams();

    // ottenere l'oggetto del libro selezionato:
    const bookArray = [...FantasyBooks, ...HistoryBooks, ...HorrorBooks, ...RomanceBooks, ...ScifiBooks];
    const bookObjectIndex = bookArray.findIndex(book => book.asin === id);
    const bookObject = bookArray[bookObjectIndex];
    const { category, img, price, title } = bookObject;

    // mostrare comment area
    useEffect(() => {
        window.scrollTo(0, 0);
        setVisibleCommentArea(true);
        return () => {
            setVisibleCommentArea(false);
        }
    }, [])

    return (
        <div className={`m-0 p-0 ${theme === "dark" ? "bg-dark text-white" : ""}`} >
            <Container className='py-5'>
                <Card className={`main-card border-0 ${theme === "dark" ? "bg-dark text-white" : ""}`}>
                    <div>
                        <Card.Img src={img} className='w-25' style={{ objectFit: 'cover' }} />
                        <Card className={`flex-grow-1 border-0 ms-5 ${theme === "dark" ? "bg-dark text-white" : ""}`}>
                            <Card.Body className='card-body'>
                                <Card.Title>Title: {title}</Card.Title>
                                <Card.Text>Category: {category}</Card.Text>
                                <Card.Text variant="bottom">Price: {price} $</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Card>

                <hr />

                <CommentArea />
            </Container>
        </div >
    )
}