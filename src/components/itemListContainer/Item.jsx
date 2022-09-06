import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = (title, description, price, pictureUrl) => {
  return (
    <Card style={{ width: '18rem' }}id="item">
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>Precio: ${price}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
  );
}


