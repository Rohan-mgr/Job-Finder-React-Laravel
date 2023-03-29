import React, { useState, useEffect, useCallback } from "react";
import "./Resume.css";
import { _getSecureLs } from "../../../helper/storage";
import { getSeekerResume } from "../../../services/seeker";
import { ImProfile } from "react-icons/im";
import { SlEnvolopeLetter } from "react-icons/sl";
function Resume() {
  const [resumePath, setResumePath] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const { user } = _getSecureLs("seekerAuth");

  const getSeekerCV = useCallback(async () => {
    try {
      const response = await getSeekerResume(user?.id);
      console.log(response);
      setResumePath(response?.resume);
      setCoverLetter(response?.letter);
    } catch (e) {
      throw new Error(e);
    }
  }, [user?.id]);

  useEffect(() => {
    getSeekerCV();
  }, []);

  return (
    <div className="resume">
      <h4>
        <ImProfile
          style={{ marginTop: "-5px", fontSize: "1.2rem", color: "#010b1d" }}
        />{" "}
        Resume
      </h4>
      {resumePath ? (
        <img src={`http://localhost:8000/${resumePath}`} alt="resume" />
      ) : (
        <h3 className="text-center m-3">No Resume uploaded yet!</h3>
      )}
      <div className="cover_letter mt-4">
        <h4>
          <SlEnvolopeLetter
            style={{ marginTop: "-5px", fontSize: "1.2rem", color: "#010b1d" }}
          />{" "}
          Cover Letter
        </h4>
        <div className="form-group">
          <p>{coverLetter}</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
