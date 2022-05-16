import React from "react";

import { Card, Button } from "react-bootstrap";
function App1(){
  return (
       <div className="wrapper">
         <Announcement 
         img="https://images-ext-1.discordapp.net/external/SXwUsPiqo-kNLH21vC6a1cydpVi090d_Z4E_-lrH0Fw/https/hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
         title="ELECTRICAL MAINTENANCE"
         description="Time:- 9 am to 10 am 
         Date:- 16-05-2022" />

         <Announcement
         //src="../images/plumbing.jpg"
         title="WATER MAINTENANCE"
         description="Time:- 11 am to 1 pm 
         Date:- 18-04-2022" />

        <Announcement
         //src="../images/PROPERTY.jpg"
         title="PROPERTY MAINTENANCE"
         description="Time:- 6 am to 7 pm 
         Date:- 30-03-2022" />
         </div>


        );
}
function Announcement(props) {
  return (
    <div className="Announcement">
    <div className="Announcement_body">
      <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
      <h2 className="Announcement_title">{props.title}</h2>
      <p className="Announcement_description">{props.description}</p>
    </div>
      <button className="Announcement_btn">More Imformation</button>
    </div>
  );
}

export default Announcement;





