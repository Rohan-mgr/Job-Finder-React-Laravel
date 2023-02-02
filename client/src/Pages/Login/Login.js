import React from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Particle from "../../Components/Particle/Particle";
import { AiFillLock } from "react-icons/ai";

function Login() {
  return (
    <div className="login">
      <Particle />
      <Form className="col-10 col-md-8 col-lg-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>
            <AiFillLock />
            JOB SEEKER SIGN IN
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button className="btn head-btn1" type="submit">
          submit
        </button>
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <span>
            Don't have an account?{" "}
            <strong style={{ color: "#da2461" }}>Sign Up</strong>
          </span>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
