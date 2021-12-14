import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Recepie({ title, description, image, price }) {
  return (
    <div className="container row col w-50 p-3 justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          className=" p-3 img-fluid w-auto"
          style={{ height: "19rem" }}
        />
        <Card.Body>
          <Card.Title className="cardTitle h-25">{`${title.substring(
            0,
            35
          )}...`}</Card.Title>
          <Card.Text> {`${description.substring(0, 50)}...`}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">to Shop</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
