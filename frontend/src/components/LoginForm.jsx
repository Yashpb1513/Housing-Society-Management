import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import axios from "axios";
import {UserContext} from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const {manageToken, manageUser, setTypes} = useContext(UserContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const gotodashboard = () => {
  navigate("/dashboard");
};
  const handleSubmit = () => {
    
     const name = document.getElementById("name").value;
     const password = document.getElementById("pass").value;
     let token = "";
     console.log(name);
    async function userRequest(){
      try{
            await axios.post('http://127.0.0.1:8000/gettoken/', {name: name, password: password}).then((res) => {
            manageToken(res.data.token);
            if(res.data.token){
              handleClose();
              setTypes(res.data.type, res.data.subtype);
              manageUser(true, name);
              localStorage.setItem("user", name);
              gotodashboard();
            }
          });
       }catch(error){
         alert("Invalid Credentials");
         manageToken(token);
         localStorage.removeItem("user");
         manageUser(false, '');
      }
     }
     userRequest()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} ms-auto>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="container">
              <div className="wrapper1">
                <div className="title">
                  <span>Login Form</span>
                </div>
                <form>
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="User Name" id="name" required />
                  </div>
                  <div className="row">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" id="pass" required />
                  </div>
                  <div className="row button">
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default LoginForm;
