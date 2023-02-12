import React from "react";
import "./UploadProfile.css";
import { BsCameraFill } from "react-icons/bs";

function UploadProfile() {
  return (
    <div className="upload_profile">
      <h4>
        <BsCameraFill style={{ marginTop: "-10px", fontSize: "2rem" }} />{" "}
        Profile Photo
      </h4>
      <div>
        <p>
          <strong>Please Upload Your Profile Photo</strong>
        </p>
        <form
          action="{{route('upload-image')}}"
          method="post"
          encType="multipart/form-data"
        >
          <div class="mb-3">
            <input
              class="form-control"
              name="image"
              type="file"
              id="formFile"
            />
          </div>
          <button type="submit" class="btn head-btn1">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadProfile;
