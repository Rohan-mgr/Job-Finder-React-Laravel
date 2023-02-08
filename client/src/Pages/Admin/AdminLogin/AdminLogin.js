import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import Particle from "../../../Components/Particle/Particle";
import { AiFillLock } from "react-icons/ai";
import { loginValidation } from "../../../validation-schema/Validation";
import { handleAdminLogin } from "../../../services/auth";
import { _setSecureLs } from "../../../helper/storage";
import { useNavigate } from "react-router-dom";
import DismissableAlert from "../../../Components/Alert/Alert";

function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        let data;
        data = await handleAdminLogin(values);
        console.log(data);
        if (!data?.user?.id) {
          throw new Error("Invalid credentials");
          // return;
        }

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        _setSecureLs("adminAuth", {
          isLoggedIn: true,
          token: data?.access_token,
          user: data?.user,
          // mode: loginMode ? "company" : "user",
          expiryDate: expiryDate.toISOString(),
        });
        navigate("/admin/dashboard");
      } catch (error) {
        setError(error);
        resetForm();
        throw new Error(error);
      }
    },
  });
  return (
    <div className="login">
      <Particle />
      <Form className="col-10 col-md-8 col-lg-4" onSubmit={formik.handleSubmit}>
        {error && <DismissableAlert>{error}</DismissableAlert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>
            <AiFillLock />
            ADMIN LOGIN
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Email<span style={{ color: "red" }}>*</span>
          </Form.Label>
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
          <Form.Label>
            Password<span style={{ color: "red" }}>*</span>
          </Form.Label>
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
        <button
          className="btn head-btn1 col-12"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </Form>
    </div>
  );
}

export default AdminLogin;
