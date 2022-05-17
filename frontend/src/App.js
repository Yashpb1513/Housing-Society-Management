import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Router, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReachUs from "./components/ReachUs";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import Cards from "./components/Cards";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Announcement" element={<Cards />} />
        <Route path="/ReachUs" element={<ReachUs />} />
        <Route
          path="/dashboard"
          element={
            <Protected isLoggedIn={true}>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
