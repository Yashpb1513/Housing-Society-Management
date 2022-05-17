import React from "react";
import { Card, Button } from "react-bootstrap";
import img1 from "../images/electrical.jpg";
function Announcement(props) {
  return (
    <>
      <Card
        border="secondary"
        style={{
          width: "18rem",
          display: "inline-block",
          float: "left",
          border: "solid",
        }}
      >
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Header>ELECTRICAL MAINTENANCE</Card.Header>
          <Card.Text>Time:- 9 am to 10 am Date:- 16-05-2022</Card.Text>
          <Button variant="primary">More Information</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          float: "left",
          margin: "0 3%",
          padding: "20px",
        }}
      >
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>ELECTRICAL MAINTENANCE</Card.Title>
          <Card.Text>
            Time:- 9 am to 10 am <br />
            Date:- 16-05-2022
          </Card.Text>
          <Button variant="primary">More Information</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Announcement;
