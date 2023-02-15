import React, { useState } from "react";
import "./UploadProfile.css";
import { BsCameraFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { handleSeekerProfileUpdate } from "../../../services/seeker";
import { _getSecureLs } from "../../../helper/storage";

function UploadProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { user } = _getSecureLs("seekerAuth");

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
          onSubmit={(e) =>
            handleSeekerProfileUpdate(
              e,
              selectedImage,
              user?.id,
              setSelectedImage
            )
          }
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <input
              className="form-control"
              name="image"
              type="file"
              id="image"
              onChange={(e) => {
                if (e.target.files[0] && e.target.files.length > 0) {
                  setSelectedImage(e.target.files[0]);
                }
              }}
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
