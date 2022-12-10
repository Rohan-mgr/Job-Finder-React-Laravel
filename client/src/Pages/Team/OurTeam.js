import React, { useState } from "react";
import Preloader from "../../Components/Preloader/Preloader";
import "./OurTeam.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import { Rotate, Fade } from "react-awesome-reveal";
import Particle from "../../Components/Particle/Particle";

function OurTeam() {
  const navigate = useNavigate();
  const [showAnimatedPage, setAnimatedPage] = useState(true);
  return (
    <>
      {showAnimatedPage ? (
        <Preloader setAnimatedPage={setAnimatedPage} />
      ) : (
        <Container fluid className="our_team">
          <Particle />
          <span onClick={() => navigate(-1)}>
            <BiArrowBack style={{ marginTop: "-2px", marginRight: "5px" }} />
            Our Team
          </span>
          <Row>
            <Col className="col-12 col-md-6 col-lg-4 text-center my-2">
              <Rotate direction="top-left" triggerOnce duration={1500}>
                <div className="ourteam__image__wrapper">
                  <img
                    src={require("../../Assets/Images/ourteam_rohan-min.jpg")}
                    alt="rohan-pic"
                  />
                </div>
              </Rotate>
              <Fade direction="up" duration={1200} delay={600}>
                <h3>Rohan Rana Magar</h3>
              </Fade>
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 text-center my-2">
              <Rotate direction="top-left" triggerOnce duration={1500}>
                <div className="ourteam__image__wrapper">
                  <img
                    src={require("../../Assets/Images/ourteam_rojan-min.jpg")}
                    alt="rohan-pic"
                  />
                </div>
              </Rotate>
              <Fade direction="up" duration={1200} delay={600}>
                <h3>Rojan Pant</h3>
              </Fade>
            </Col>
            <Col className="col-12 col-md-12 col-lg-4 text-center my-2">
              <Rotate direction="top-left" triggerOnce duration={1500}>
                <div className="ourteam__image__wrapper">
                  <img
                    src={require("../../Assets/Images/ourteam_amrit-min.jpg")}
                    alt="rohan-pic"
                  />
                </div>
              </Rotate>
              <Fade direction="up" duration={1200} delay={600}>
                <h3>Amrit Gurung</h3>
              </Fade>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default OurTeam;
