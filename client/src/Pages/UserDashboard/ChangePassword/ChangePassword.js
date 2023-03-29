import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { handleSeekerPasswordUpdate } from "../../../services/seeker";
import { handleEmployerPasswordUpdate } from "../../../services/employer";
import { useFormik } from "formik";
import DismissableAlert from "../../../Components/Alert/Alert";
import { _getSecureLs } from "../../../helper/storage";
import { updatePasswordValidation } from "../../../validation-schema/Validation";

function ChangePassword(props) {
  const [error, setError] = useState(null);
  let User;
  if (props.Mode === "seeker") {
    User = _getSecureLs("seekerAuth")?.user;
  } else {
    User = _getSecureLs("employerAuth")?.user;
  }
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: updatePasswordValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        let data;
        if (props.Mode === "seeker") {
          data = await handleSeekerPasswordUpdate(values, User?.id);
        } else {
          data = await handleEmployerPasswordUpdate(values, User?.id);
        }

        console.log(data);
        setError(data);
      } catch (error) {
        console.log(error);
        // setError(error);
        resetForm();
        throw new Error(error);
      }
      resetForm();
    },
  });

  return (
    <Form className="col-lg-8 col-md-8" onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="oldPassword">
        {error?.message && (
          <DismissableAlert
            error
            SetError={setError}
            Success={error.status === 200 ? true : false}
          >
            {/* {error.status === 200 ? error.message : error} */}
            {error.message}
          </DismissableAlert>
        )}
        <Form.Label>Old Password</Form.Label>
        <Form.Control
          type="password"
          name="oldPassword"
          value={formik.values.oldPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.oldPassword && formik.touched.oldPassword}
        />
        {formik.errors.oldPassword && formik.touched.oldPassword && (
          <Form.Control.Feedback type="invalid">
            {formik.errors.oldPassword}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="newPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          name="newPassword"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.newPassword && formik.touched.newPassword}
        />
        {formik.errors.newPassword && formik.touched.newPassword && (
          <Form.Control.Feedback type="invalid">
            {formik.errors.newPassword}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={
            !!formik.errors.confirmPassword && formik.touched.confirmPassword
          }
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <Form.Control.Feedback type="invalid">
            {formik.errors.confirmPassword}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <button type="submit" className="btn head-btn1">
        Update
      </button>
    </Form>
  );
}

export default ChangePassword;
