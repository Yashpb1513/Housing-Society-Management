import React from "react";
import { Card, Button } from "react-bootstrap";
import carousel from "./Carousel"
import img1 from "../images/electrical.jpg";
import img2 from "../images/plumbing.jpg";
import img3 from "../images/PROPERTY.jpg";
function Announcement(props) {
  return (
    <>
    <carousel />
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          float: "left",
          border: "solid",
          margin: "0 3%",
          padding: "20px",
          height:"26rem",
          backgroundColor: "lightpink"
        }}
      >
        <Card.Img style={{width: "15rem",height: "10rem"}} variant="top" src={img1} />
        <Card.Body>
          <Card.Title>ELECTRICAL MAINTENANCE</Card.Title><br />
          <Card.Text>Time:- 9 am to 10 am Date:- 16-05-2022</Card.Text>
          <Button variant="danger">More Information</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          float: "left",
          margin: "0 3%",
          padding: "20px",
          border: "solid",
          height:"26rem",
          backgroundColor: "lightpink"
        }}
      >
        <Card.Img style={{width: "15rem",height: "10rem"}} variant="top" src={img2} />
        <Card.Body>
          <Card.Title>WATER MANAGEMENT</Card.Title><br />
          <Card.Text>
            Time:- 11 am to 1 pm <br />
            Date:- 12-05-2022
          </Card.Text>
          <Button variant="danger">More Information</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          float: "left",
          border: "solid",
          margin: "0 3%",
          padding: "20px",
          height:"26rem",
          backgroundColor: "lightpink"
        }}
      >
        <Card.Img style={{width: "15rem",height: "10rem"}} variant="top" src={img3} />
        <Card.Body>
          <Card.Title>PROPERTY MAINTENANCE</Card.Title><br />
          <Card.Text>Time:- 5 Pm to 7 Pm Date:- 16-05-2022</Card.Text>
          <Button  variant="danger">More Information</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Announcement;
