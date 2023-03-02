import React, { useState, useEffect } from "react";
import "./Login.css";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Particle from "../../Components/Particle/Particle";
import { AiFillLock } from "react-icons/ai";
import { loginValidation } from "../../validation-schema/Validation";
import { useFormik } from "formik";
import { handleEmployerLogin, handleSeekerLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { _setSecureLs } from "../../helper/storage";
import DismissableAlert from "../../Components/Alert/Alert";

function Login() {
  const { mode } = useParams();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        let data;
        if (mode === "employer") {
          data = await handleEmployerLogin(values);
          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          _setSecureLs("employerAuth", {
            isLoggedIn: true,
            token: data?.access_token,
            user: data?.user,
            userMode: "employer",
            expiryDate: expiryDate.toISOString(),
          });
        } else {
          data = await handleSeekerLogin(values);
          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          console.log(data);
          _setSecureLs("seekerAuth", {
            isLoggedIn: true,
            token: data?.access_token,
            user: data?.user,
            userMode: "seeker",
            expiryDate: expiryDate.toISOString(),
          });
        }
        if (!data?.user?.id) {
          throw new Error("Invalid credentials");
          // return;
        }

        navigate(
          `/account/${mode === "employer" ? "employer" : "seeker"}/dashboard`
        );
      } catch (error) {
        setError(error);
        resetForm();
        throw new Error(error);
      }
      resetForm();
    },
  });

  useEffect(() => {
    document.title = "Jobfinder.com | Sign In";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login">
      <Particle />
      <Form className="col-10 col-md-8 col-lg-4" onSubmit={formik.handleSubmit}>
        {error && <DismissableAlert>{error}</DismissableAlert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>
            <AiFillLock />
            {mode === "seeker" ? "JOB SEEKER" : "EMPLOYER"} SIGN IN
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
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
        <button className="btn head-btn1 col-12" type="submit">
          {formik.isSubmitting ? "Logging In..." : "Log In"}
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
