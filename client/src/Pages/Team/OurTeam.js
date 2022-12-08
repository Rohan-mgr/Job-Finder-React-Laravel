import React, { useState, useEffect } from "react";
import Preloader from "../../Components/Preloader/Preloader";
import "./OurTeam.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function OurTeam() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7700);
    return () => clearTimeout();
  }, []);
  return loading ? (
    <Preloader />
  ) : (
    <div className="our_team">
      <span onClick={() => navigate(-1)}>
        <BiArrowBack style={{ marginTop: "-2px" }} />
        Go Back
      </span>
      <h1>Our Team</h1>
    </div>
  );
}

export default OurTeam;
