import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "./LoginForm.css";
function LoginForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} ml-auto>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="container">
              <div className="wrapper">
                <div className="title">
                  <span>Login Form</span>
                </div>
                <form action="#">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Email or Phone" required />
                  </div>
                  <div className="row">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="pass">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="row button">
                    <input type="submit" value="Login" />
                  </div>
                  <div className="signup-link">
                    Not a member? <a href="#">Signup now</a>
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
