import React from "react";
import "./Login.css";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Particle from "../../Components/Particle/Particle";
import { AiFillLock } from "react-icons/ai";

function Login() {
  const { mode } = useParams();
  return (
    <div className="login">
      <Particle />
      <Form className="col-10 col-md-8 col-lg-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>
            <AiFillLock />
            {mode === "seeker" ? "JOB SEEKER" : "EMPLOYER"} SIGN IN
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
        <button className="btn head-btn1 col-12" type="submit">
          submit
        </button>
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <span>
            Don't have an account?{" "}
            <a
              href={
                mode === "seeker" ? "/register/seeker" : "/register/employer"
              }
            >
              Sign Up
            </a>
          </span>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
