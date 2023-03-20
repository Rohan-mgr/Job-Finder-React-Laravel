import React, { useState, useEffect, useCallback } from "react";
import { _getSecureLs } from "../../../helper/storage";
import { getSeekerResume } from "../../../services/seeker";
// import PdfViewer from "./PdfViewer";
import axios from "axios";
function Resume() {
  const [resumePath, setResumePath] = useState(null);
  const [resume, setResume] = useState("");
  const { user } = _getSecureLs("seekerAuth");

  const getSeekerCV = useCallback(async () => {
    try {
      const response = await getSeekerResume(user?.id);
      console.log(response);
      setResumePath(response?.resume);
    } catch (e) {
      throw new Error(e);
    }
  }, [user?.id]);

  useEffect(() => {
    getSeekerCV();
  }, []);

  //   axios
  //     .get(`http://localhost:8000/api/account/seeker/my_resume/${user?.id}`, {
  //       responseType: "blob", //Force to receive data in a Blob Format
  //     })
  //     .then((response) => {
  //       //Create a Blob from the PDF Stream
  //       console.log(response);
  //       const file = new Blob([response.data], { type: "application/pdf" });
  //       //Build a URL from the file
  //       const fileURL = URL.createObjectURL(file);
  //       console.log(fileURL);
  //       //Open the URL on new Window
  //       window.open(fileURL);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  return (
    <div>
      <h1>Resume</h1>
      <p>{user?.name}</p>
      <p>{resumePath}</p>
      {/* <PdfViewer /> */}
    </div>
  );
}

export default Resume;
