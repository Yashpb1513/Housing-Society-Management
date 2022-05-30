import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
// let cardInfo = [
  // {
  //   image: "electrical",
  //   header: "ELECTRICAL MAINTENANCE",
  //   desc: "",
  //   time: "Time:- 9 am to 10 am",
  //   date: "Date:- 16-05-2022",
  //   alt: "Electrician Maintainence",
  //   disabled: true,
  // },
  // {
  //   image: "plumbing",
  //   header: "WATER MANAGEMENT",
  //   desc: "This card contains information about water management. Click on More Information",
  //   time: "Time:- 9 am to 10 am",
  //   date: "Date:- 16-05-2022",
  //   alt: "Water Maintainence",
  //   disabled: false,
  // },
  // {
  //   image: "PROPERTY",
  //   header: "PROPERTY MAINTENANCE",
  //   desc: "",
  //   time: "Time:- 9 am to 10 am",
  //   date: "Date:- 16-05-2022",
  //   alt: "Property Maintaince",
  // },
  // {
  //   image: "PROPERTY",
  //   header: "PROPERTY MAINTENANCE",
  //   desc: "",
  //   time: "Time:- 9 am to 10 am",
  //   date: "Date:- 16-05-2022",
  //   alt: "Property Maintaince",
  // },
// ];

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
    // axios.get("http://127.0.0.1:8000/announce/", {headers}).then((res) => {
    //   console.log(res.data);

    // });
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
              <Card.Img
                variant="top"
                src={`https://source.unsplash.com/300x200/?${card.image}`}
                // src={card.image}
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
                <Card.Text>Date: {card.date}</Card.Text>
                <Card.Text>Time: {card.time}</Card.Text>
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
