import React, { useState } from "react";
import "./CV.css";
import { handleSeekerCVUpload } from "../../../services/seeker";
import { _getSecureLs } from "../../../helper/storage";

function CV() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const { user } = _getSecureLs("seekerAuth");
  return (
    <form
      className="uploader"
      onSubmit={
        (e) => handleSeekerCVUpload(e, selectedFile, coverLetter, user?.id)
        // window.location.reload(true);
      }
      encType="multipart/form-data"
    >
      <label id="file-drag">
        <div id="start">
          <i class="fa fa-download" aria-hidden="true"></i>
          <div>Select a file here</div>
          <div>Suitable file are .doc, .docx, rtf, pdf</div>
          <span id="file-upload-btn">
            <input
              name="upload_file"
              type="file"
              id="upload_file"
              onChange={(e) => {
                if (e.target.files[0] && e.target.files.length > 0) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
              accept=".pdf, .doc, .docx"
            />
          </span>
        </div>
      </label>
      <div className="cover_letter">
        <h4>Your Cover Letter</h4>
        <div className="form-group">
          <textarea
            required
            rows="4"
            name="cover_letter"
            value={coverLetter}
            onChange={(e) => {
              setCoverLetter(e.target.value);
            }}
            style={{ width: "100%" }}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn head-btn1">
        Save
      </button>
    </form>
  );
}

export default CV;
