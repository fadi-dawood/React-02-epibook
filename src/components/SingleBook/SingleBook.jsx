import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css'


export default function SingleBook({ book, i }) {
    const { img, price, category, title } = book;
    const [selected, setSelected] = useState(false);

    function selectBook() {
        setSelected(!selected);
    }

    return (
        <Card className={`border-0 col-10 col-sm-5 col-md-3 col-lg-2 m-2 ${selected ? "selected-card" : ""}`} key={i} >
            <Card.Img className='book-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='book-title'>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Card.Text>{category}</Card.Text>
                <Button variant="primary" onClick={selectBook}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
