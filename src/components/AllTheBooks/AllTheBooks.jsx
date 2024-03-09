import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AllTheBooks.css'


function AllTheBooks({ Books, Category, NumOfBooks }) {
  const ShuffleBooks = Books.sort(() => Math.random() - 0.5);
  return (
    <div>
      <h2 className='mx-5 mt-5 mb-2'>
        {`${Category.charAt(0).toUpperCase() + Category.slice(1).toLowerCase()} Books`}
      </h2>
      <div className='row p-4 d-flex justify-content-center w-100'>
        {ShuffleBooks.slice(0, NumOfBooks).map(({ img, title, price, category }, index) => (
          <Card className='col-10 col-sm-5 col-md-3 col-lg-2 m-2' key={index} >
            <Card.Img className='book-img' variant="top" src={img} />
            <Card.Body>
              <Card.Title className='book-title'>{title}</Card.Title>
              <Card.Text>{price}</Card.Text>
              <Card.Text>{category}</Card.Text>
              <Button variant="primary">Add to CArt</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllTheBooks;
