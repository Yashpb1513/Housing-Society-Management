import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Router, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReachUs from "./components/ReachUs";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import Announcement from "./components/Announcement";
import { UserProvider } from "./context/UserContext";
import {UserContext} from "./context/UserContext";
import { useContext, useEffect } from "react";
import LoggedNavBar from "./components/LoggedNavBar";
function App() {
  const { getUserStatus, getUserName } = useContext(UserContext);
  const [status, setStatus] = React.useState(false);
  const [name, setName] = React.useState(false);
  useEffect(() => {
    setStatus(getUserStatus());
    setName(getUserName());
  },[]);
  console.log(getUserStatus());
  return (
    <div>
      {status ? <LoggedNavBar name={name}/> : <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/ReachUs" element={<ReachUs />} />
        <Route
          path="/dashboard"
          element={
            // <Protected isLoggedIn={status}>
              <Dashboard />
            // </Protected>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
