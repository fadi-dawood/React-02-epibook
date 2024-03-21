import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css'
import { Col } from 'react-bootstrap';
import CommentArea from '../CommentArea/CommentArea';
import { ThemeContext } from '../../Context/ThemeContextProvider';


export default function SingleBook({ book }) {
    const { img, price, category, title, asin } = book;
    const [selected, setSelected] = useState(false);

    function selectBook() {
        setSelected(!selected);
    }

    const { theme } = useContext(ThemeContext);

    return (
        <Col lg={3} md={6} sm={6} xs={10}  className='mb-2'>
            <Card className={`card-container border-0 m-2 ${selected ? "selected-card" : ""} ${theme === "dark" ? "bg-dark text-white" : ""}`}>
                <Card.Img className='book-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='book-title'>{title}</Card.Title>
                    <Card.Text>{price} $</Card.Text>
                    <Card.Text>{category}</Card.Text>
                    {selected &&
                        <CommentArea bookId={asin} />
                    }
                    <Button variant={selected === true ? `danger` : `primary`} onClick={selectBook}>{selected === true ? `Hide comments` : `Show comments`}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
