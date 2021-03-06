import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import Slide from 'react-reveal/Slide'
import RubberBand from "react-reveal/Slide";
export default function Announcement() {

  const [cardInfo, setCardInfo] = useState([]);
  useEffect (() => {
    const headers = {'content-Type': 'application/json'}
    async function getAnnouncements(){
      try{
         const ann=await axios.get("http://127.0.0.1:8000/announce");
         console.log(ann.data)
         setCardInfo(...cardInfo, ann.data);
       }catch(error){
         console.log(error)
      }
     }
     getAnnouncements()
  }, []);
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
              <Slide top duration={5000}>
                <Card.Img
                  variant="top"
                  src={`https://source.unsplash.com/300x200/?${card.image}`}
                  alt={card.alt}
                  style={{
                    border: "dashed",
                    padding: "5px",
                    width: "100%",
                    height: "10rem",
                    margin: "0 auto",
                  }}
                />
              </Slide>
              <Card.Body>
                <Slide left duration={1500}>
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
                </Slide>
                <Slide left duration={1500}>
                  <Card.Text>{card.desc}</Card.Text>
                </Slide>
                <Slide right duration={1500}>
                  <Card.Text>Date: {card.date}</Card.Text>
                </Slide>
                <Slide left duration={1500}>
                  <Card.Text>Time: {card.time}</Card.Text>
                </Slide>
              </Card.Body>
              <RubberBand duration={3000}>
                <Button
                  style={{ fontSize: "1.3rem" }}
                  variant="info"
                  size="md"
                  disabled={card.disabled}
                >
                  {card.disabled ? "Kindly Take in Notice" : "More Information"}
                </Button>
              </RubberBand>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
