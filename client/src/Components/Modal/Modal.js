import React, { useState } from "react";
import "./Modal.css";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function AuthModal(props) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  console.log(props.show.text);

  return (
    <>
      {/* <button className="btn head-btn1" onClick={handleShow}>
        Launch demo modal
      </button> */}

      <Modal show={props.show.status} onHide={props.handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title className="text-center">Choose Login Option</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="text-center">
          <FaUserAlt />
          <p>Choose {props.show.text} Option</p>
          <NavLink
            to={
              props.show.text === "Login" ? "login/seeker" : "register/seeker"
            }
            className="btn-seeker"
            onClick={props.handleClose}
          >
            I'm a Jobseeker
          </NavLink>
          <NavLink
            to={
              props.show.text === "Login"
                ? "login/employer"
                : "register/employer"
            }
            className="btn-employer"
            onClick={props.handleClose}
          >
            I'm a Employer
          </NavLink>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default AuthModal;
