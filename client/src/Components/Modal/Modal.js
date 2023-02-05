import React, { useState } from "react";
import "./Modal.css";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { _getSecureLs } from "../../helper/storage";

function AuthModal(props) {
  const { modalType } = _getSecureLs("authModal");

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <FaUserAlt />
          <p>Choose {modalType} Option</p>
          <NavLink
            to={modalType === "Login" ? "login/seeker" : "register/seeker"}
            className="btn-seeker"
            onClick={props.handleClose}
          >
            I'm a Jobseeker
          </NavLink>
          <NavLink
            to={modalType === "Login" ? "login/employer" : "register/employer"}
            className="btn-employer"
            onClick={props.handleClose}
          >
            I'm a Employer
          </NavLink>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AuthModal;
