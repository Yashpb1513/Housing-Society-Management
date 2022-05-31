import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const cardInfo = [
  {
    image: "electrical",
    header: "ELECTRICIAN",
    desc: "Working Hours",
    time: "Time:- 10 am to 5 pm",
    alt: "Electrician",
    mob: "tel:123-456-7890",
    mob1: "123-456-7890",
  },
  {
    image: "plumbing",
    header: "Plumber",
    desc: "Working Hour",
    time: "Time:- 10 am to 5 pm",
    alt: "Plumber",
    mob: "tel:123-645-7890",
    mob1: "123-645-7890",
  },
  {
    image: "SecurityGuard",
    header: "Security Guard",
    desc: "Working Hours",
    time: "Time:- 9 am to 7 pm",
    alt: "Guard",
    mob: "tel:123-456-8468",
    mob1: "123-456-8468",
  },
  {
    image: "Carpenter",
    header: "Carpenter",
    desc: "Working Hours",
    time: "Time:- 6 am to 6 pm",
    alt: "Carpenter",
    mob: "tel:789-456-1230",
    mob1: "789-456-1230",
  },
];
function GeneralContacts() {
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
                  width: "100%",
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
                <Card.Text>{card.time}</Card.Text>
                <Card.Link href={card.mob}>Contact : {card.mob1}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GeneralContacts;
