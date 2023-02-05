import React from "react";
import "./Register.css";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Particle from "../../Components/Particle/Particle";
import { AiFillLock } from "react-icons/ai";
import { useFormik } from "formik";
import { signupValidation } from "../../validation-schema/signupValidation";

function Register() {
  const { mode } = useParams();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    validationSchema: signupValidation,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({ values: "" });
    },
  });

  return (
    <div className="register">
      <Particle />
      <Form className="col-12 col-md-9 col-lg-5" onSubmit={formik.handleSubmit}>
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
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={!!formik.errors.fullName && formik.touched.fullName}
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.fullName}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          {mode === "employer" && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Name"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.errors.companyName && formik.touched.companyName
                }
              />
              {formik.errors.companyName && formik.touched.companyName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.companyName}
                </Form.Control.Feedback>
              )}
            </Form.Group>
          )}
        </div>

        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={!!formik.errors.email && formik.touched.email}
            />
            {formik.errors.email && formik.touched.email && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile Number"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={!!formik.errors.number && formik.touched.number}
            />
            {formik.errors.number && formik.touched.number && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.number}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </div>

        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.password && formik.touched.password}
            />
            {formik.errors.password && formik.touched.password && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isInvalid={
                !!formik.errors.confirmPassword &&
                formik.touched.confirmPassword
              }
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.confirmPassword}
                </Form.Control.Feedback>
              )}
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Field
            type="checkbox"
            name="acceptTerms"
            label="I have read and understood and agree to the Terms and Conditions governing the use of jobfinder.com"
            component={Checkbox}
          /> */}
          <Form.Check
            type="checkbox"
            name="acceptTerms"
            checked={formik.values.acceptTerms}
            onChange={formik.handleChange}
            label="I have read and understood and agree to the Terms and Conditions governing the use of jobfinder.com"
          />
        </Form.Group>

        <button
          className="btn head-btn1 col-12"
          type="submit"
          disabled={formik.isSubmitting}
        >
          CREATE {mode === "seeker" ? "JOBSEEKER" : "EMPLOYER"} Account
        </button>
      </Form>
    </div>
  );
}

export default Register;
