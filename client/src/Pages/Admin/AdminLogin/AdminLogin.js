import React from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import Particle from "../../../Components/Particle/Particle";
import { AiFillLock } from "react-icons/ai";
import { loginValidation } from "../../../validation-schema/Validation";
import { handleAdminLogin } from "../../../services/auth";
import { _setSecureLs } from "../../../helper/storage";

function AdminLogin() {
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
        if (!data?.user?.id) {
          console.log(data);
          return;
        }

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        _setSecureLs("adminAuth", {
          isLoggedIn: true,
          token: data?.access_token,
          user: data?.user?.id,
          // mode: loginMode ? "company" : "user",
          expiryDate: expiryDate.toISOString(),
        });
        console.log(data);
      } catch (e) {
        throw new Error(e);
      }
      resetForm();
    },
  });
  return (
    <div className="login">
      <Particle />
      <Form className="col-10 col-md-8 col-lg-4" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>
            <AiFillLock />
            ADMIN LOGIN
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
        <button
          className="btn head-btn1 col-12"
          type="submit"
          disabled={formik.isSubmitting}
        >
          submit
        </button>
      </Form>
    </div>
  );
}

export default AdminLogin;
