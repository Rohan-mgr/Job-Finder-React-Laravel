import React from "react";
import Form from "react-bootstrap/Form";

function ChangePassword() {
  return (
    <Form className="col-lg-8 col-md-8">
      <Form.Group className="mb-3" controlId="oldPassword">
        <Form.Label>Old Password</Form.Label>
        <Form.Control type="password" name="oldPassword" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="newPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" name="newPassword" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="confirmPassword" />
      </Form.Group>
      <button type="submit" className="btn head-btn1">
        Update
      </button>
    </Form>
  );
}

export default ChangePassword;
