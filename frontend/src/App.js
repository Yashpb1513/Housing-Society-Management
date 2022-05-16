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
    </div>
  );
}
export default App;
