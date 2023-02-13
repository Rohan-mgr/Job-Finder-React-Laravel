import React from "react";
import "./CV.css";

function CV() {
  return (
    <form
      action=""
      method="POST"
      encType="multipart/form-data"
      className="uploader"
    >
      <label id="file-drag">
        <div id="start">
          <i class="fa fa-download" aria-hidden="true"></i>
          <div>Select a file here</div>
          <div>Suitable file are .doc, .docx, rtf, pdf</div>
          <span id="file-upload-btn">
            <input id="file-upload" type="file" name="cv_attachment" />
          </span>
        </div>
      </label>
      <div className="cover_letter">
        <h4>Your Cover Letter</h4>
        <div className="form-group">
          <textarea
            rows="4"
            name="cover_letter"
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
