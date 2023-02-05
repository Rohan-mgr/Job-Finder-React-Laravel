import React from "react";
import "./Register.css";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Particle from "../../Components/Particle/Particle";
import { AiFillLock } from "react-icons/ai";

function Register() {
  const { mode } = useParams();
  return (
    <div className="register">
      <Particle />
      <Form className="col-12 col-md-9 col-lg-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>
            <AiFillLock />
            CREATE {mode === "seeker" ? "SEEKER" : "EMPLOYER"} LOGIN DETAILS
          </p>
        </Form.Group>

        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group
            className={`mb-3 ${mode === "seeker" && "col-12"}`}
            controlId="formBasicEmail"
          >
            <Form.Label>Enter Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          {mode === "employer" && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" />
            </Form.Group>
          )}
        </div>

        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Mobile Number</Form.Label>
            <Form.Control type="number" placeholder="Mobile Number" />
          </Form.Group>
        </div>

        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I have read and understood and agree to the Terms and Conditions governing the use of jobfinder.com"
          />
        </Form.Group>

        <button className="btn head-btn1 col-12" type="submit">
          CREATE {mode === "seeker" ? "JOBSEEKER" : "EMPLOYER"} Account
        </button>
      </Form>
    </div>
  );
}

export default Register;
