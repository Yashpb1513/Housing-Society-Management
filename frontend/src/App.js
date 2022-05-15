import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";
import React, { Component } from "react";
import Announcement from "./components/Announcement";
function App() {
  return (
    <div>
      <LandingPage />
      <Announcement />
    </div>
  );
}
export default App;
