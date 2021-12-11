import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Recepie({ title, description, image, price }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">to Shop</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
