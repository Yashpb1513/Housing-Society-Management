import React from "react";
import img1 from "../images/electrical.jpg";

import { Card, Button } from "react-bootstrap";
function Announcement() {
  return (
    <div>
      Announcement
      <Card style={{ width: "18rem" , padding: "1rem"}}>
        <Card.Img variant="top" src={img1}></Card.Img>
        <Card.Body style={{ textAlign:"center", backgroundColor:"lightpink"}}>
          <Card.Title style={{ textDecoration:"underline"}}>ELECTRICAL MAINTENANCE</Card.Title>
          <Card.Text>
            TIME :  9 am to 10 am 
          </Card.Text>
          <Card.Text>
            DATE :  16-05-2022  
          </Card.Text>
          <Button variant="primary">More Imformation</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Announcement;




