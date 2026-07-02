import React from 'react';
import Card from 'react-bootstrap/Card';

const NewChildCard = ({image, place, price}) => {
  return (
    <div>
        <Card>
      <Card.Img variant="top" src={image}/>
      <Card.Body className='d-flex justify-content-between text-uppercase bg-secondary-subtle'>
        <Card.Text>{place}</Card.Text>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default NewChildCard