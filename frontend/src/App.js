import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReachUs from "./components/ReachUs";
import Announcement from "./components/Announcement";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/ReachUs" element={<ReachUs />} />
      </Routes>
      <div className="wrapper">
         <Announcement 
         img="../images/electrical.jpg"
         title="ELECTRICAL MAINTENANCE"
         description="Time:- 9 am to 10 am 
         Date:- 16-05-2022" />

         <Announcement
         img="../images/plumbing.jpg"
         title="WATER MAINTENANCE"
         description="Time:- 11 am to 1 pm 
         Date:- 18-04-2022" />

        <Announcement
         img="../images/PROPERTY.jpg"
         title="PROPERTY MAINTENANCE"
         description="Time:- 6 am to 7 pm 
         Date:- 30-03-2022" />
         </div>

    </div>
  );
}
export default App;
