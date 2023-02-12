import React, { useState } from "react";
import "./UploadProfile.css";
import { BsCameraFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";

function UploadProfile() {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="upload_profile">
      <h4>
        <BsCameraFill
          style={{ marginTop: "-10px", fontSize: "2rem", color: "#010b1d" }}
        />{" "}
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
              onChange={(e) => handleImageChange(e)}
              accept="image/*"
            />
          </div>
          <div className="preview_image">
            {selectedImage ? (
              <Card.Img
                variant="top"
                src={URL.createObjectURL(selectedImage)}
                style={{ zIndex: "1" }}
              />
            ) : (
              <h5>
                <strong>preview your selected image</strong>
              </h5>
            )}
            {/* <img
              src={require("../../../Assets/Images/ourteam_rohan-min.jpg")}
              alt="chosen img"
            /> */}
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
