import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = () => {
  const cardInfo = [
    {
      image: "electrical",
      header: "ELECTRICAL MAINTENANCE",
      text: "Time:- 9 am to 10 am Date:- 16-05-2022",
      alt: "Electrician Maintainence",
    },
    {
      image: "plumbing",
      header: "WATER MANAGEMENT",
      text: "Time:- 11 am to 1 pm Date:- 12-05-2022",
      alt: "Water Maintainence",
    },
    {
      image: "PROPERTY",
      header: "PROPERTY MAINTENANCE",
      text: "Time:- 5 Pm to 7 Pm Date:- 16-05-2022",
      alt: "Property Maintaince",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card 
        style={{
          width: "18rem",
          display: "inline-block",
          float: "left",
          border: "solid",
          margin: "2% 3%",
          padding: "20px",
          height: "25rem",
          backgroundColor: "lightpink",
        }}
      >
        <Card.Img
          variant="top"
          src={require(`../images/${card.image}.jpg`)}
          alt={card.alt}
          style={{ width: "15rem", height: "10rem" }}
        />
        <Card.Body>
          <Card.Header>{card.header}</Card.Header>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
        <Button variant="light"  size="lg">More Information</Button>
      </Card>
    );
  };

  return <div>{cardInfo.map(renderCard)}</div>;
};

export default Cards;
