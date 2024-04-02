import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css'
import { Col } from 'react-bootstrap';
import { ThemeContext } from '../../Context/ThemeContextProvider';
import { LatestReleaseContext } from '../../Context/LatestReleaseContextProvider';
import { useNavigate } from 'react-router-dom';


export default function SingleBook({ book }) {

    // impostare la thema dell'App
    const { theme } = useContext(ThemeContext);

    // le proprs passati da AllTheBooks (l'oggetto del libro)
    const { img, price, category, title, asin } = book;

    // selectedBook: l'id del libro selezionato dall'utente
    // setVisibleCommentArea: aggirnare la visibilita del CommentArea
    const { selectedBook, setSelectedBook,visibleCommentArea, setVisibleCommentArea } = useContext(LatestReleaseContext)

    // quando si clicca su "Show comments"
    function selectBook() {
        setSelectedBook(asin);
        setVisibleCommentArea(true);
    }

    // quando si clicca su "Hide Comments"
    function deSelectBook() {
        setSelectedBook("");
        setVisibleCommentArea(false);
    }


    // andare sulla pagina Details:
    const navigate = useNavigate();
    function goToDetailPage() {
        setVisibleCommentArea(false);
        setSelectedBook(asin);
        navigate(`/details/${asin}`);
    }


    return (
        <Col lg={visibleCommentArea ? 4 : 3} md={visibleCommentArea ? 6 : 4} sm={6} xs={10} className='mb-2'>
            <Card className={`card-container border-0 m-2 ${selectedBook === asin ? "selected-card" : ""} ${theme === "dark" ? "bg-dark text-white" : ""}`}>
                <Card.Img className='book-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='book-title'>{title}</Card.Title>
                    <Card.Text>{price} $</Card.Text>
                    <Card.Text>{category}</Card.Text>
                    {selectedBook !== asin &&
                        <div className='d-flex justify-content-between'>
                            <Button className='p-1 ' variant="primary" onClick={selectBook}>
                                <small className='mx-1'>Show comments</small>
                            </Button>
                            <Button className='p-1 ms-5' variant="primary" onClick={goToDetailPage}>
                                <small className='mx-1'> Details</small>
                            </Button>
                        </div>

                    }
                    {selectedBook === asin &&
                        <div className='d-flex justify-content-between'>
                            <Button className='p-1 ' variant="danger" onClick={deSelectBook}>
                                <small className='mx-1'>Hide comments</small>
                            </Button>
                            <Button className='p-1 ms-5' variant="primary" onClick={goToDetailPage}>
                                <small className='mx-1'>Details</small>
                            </Button>
                        </div>
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}
