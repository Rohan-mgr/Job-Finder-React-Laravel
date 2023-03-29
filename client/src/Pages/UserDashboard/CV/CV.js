import React, { useState } from "react";
import "./CV.css";
import { handleSeekerCVUpload } from "../../../services/seeker";
import { _getSecureLs } from "../../../helper/storage";
import DismissableAlert from "../../../Components/Alert/Alert";

function CV() {
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const { user } = _getSecureLs("seekerAuth");
  return (
    <>
      {error && (
        <DismissableAlert
          error
          SetError={setError}
          Success={error?.status === 200 ? true : false}
        >
          {error?.message}
        </DismissableAlert>
      )}
      <form
        className="uploader"
        onSubmit={async (e) => {
          try {
            const response = await handleSeekerCVUpload(
              e,
              selectedFile,
              coverLetter,
              user?.id
            );
            setSelectedFile(null);
            setCoverLetter("");
            if (response?.status === 200) {
              setError((prevState) => {
                return {
                  ...prevState,
                  message: response?.data.message,
                  status: response?.status,
                };
              });
            }
            console.log(response);
          } catch (e) {
            console.log(e.response.data.message.upload_file[0]);
            setError({ message: e.response?.data.message.upload_file[0] });
            setSelectedFile(null);
            setCoverLetter("");
            throw new Error(e);
          }

          // window.location.reload(true);
        }}
        encType="multipart/form-data"
      >
        <label id="file-drag">
          <div id="start">
            <i class="fa fa-download" aria-hidden="true"></i>
            <div>Select a file here</div>
            <div>Suitable file are .png, .jpeg, .jpg</div>
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
                // accept="image/*"
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
    </>
  );
}

export default CV;
