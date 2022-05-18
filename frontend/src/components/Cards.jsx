import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
const cardInfo = [
  {
    image: "electrical",
    header: "ELECTRICAL MAINTENANCE",
    desc: "",
    time: "Time:- 9 am to 10 am",
    date: "Date:- 16-05-2022",
    alt: "Electrician Maintainence",
    disabled: true,
  },
  {
    image: "plumbing",
    header: "WATER MANAGEMENT",
    desc: "This card contains information about water management. Click on More Information",
    time: "Time:- 9 am to 10 am",
    date: "Date:- 16-05-2022",
    alt: "Water Maintainence",
    disabled: false,
  },
  {
    image: "PROPERTY",
    header: "PROPERTY MAINTENANCE",
    desc: "",
    time: "Time:- 9 am to 10 am",
    date: "Date:- 16-05-2022",
    alt: "Property Maintaince",
  },
  {
    image: "PROPERTY",
    header: "PROPERTY MAINTENANCE",
    desc: "",
    time: "Time:- 9 am to 10 am",
    date: "Date:- 16-05-2022",
    alt: "Property Maintaince",
  },
];

export default function Cards() {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4 ">
        {cardInfo.map((card) => (
          <Col>
            <Card
              className="h-100"
              bg="light"
              text="dark"
              style={{
                border: "solid",
                margin: "2% 3%",
                padding: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={require(`../images/${card.image}.jpg`)}
                alt={card.alt}
                style={{
                  border: "dashed",
                  padding: "5px",
                  width: "15rem",
                  height: "10rem",
                  margin: "0 auto",
                }}
              />
              <Card.Body>
                <Card.Header
                  style={{
                    backgroundColor: "darkblue",
                    color: "whitesmoke",
                    textAlign: "center",
                    marginBottom: "3px",
                  }}
                >
                  {card.header}
                </Card.Header>
                <Card.Text>{card.desc}</Card.Text>
                <Card.Text>{card.date}</Card.Text>
                <Card.Text>{card.time}</Card.Text>
              </Card.Body>
              <Button
                style={{ fontSize: "1.3rem" }}
                variant="info"
                size="md"
                disabled={card.disabled}
              >
                {card.disabled ? "Kindly Take in Notice" : "More Information"}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
