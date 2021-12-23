import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Recipe({ title, summary, image, price }) {
  return (
    <div className="container ms-2 d-flex col p-3 justify-content-center">
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={image}
          className=" p-3 img-fluid w-auto"
          style={{ height: "17rem" }}
        />
        <Card.Body>
          <Card.Title className="cardTitle h-25">{`${title.substring(
            0,
            35
          )}...`}</Card.Title>
          <Card.Text> {`${summary.substring(0, 50)}...`}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary" className=" m-2">
            Get Recipes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
