import React from "react";
import "./UploadProfile.css";
import { BsCameraFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { useFormik } from "formik";
import { handleSeekerProfileUpdate } from "../../../services/seeker";

function UploadProfile() {
  const formik = useFormik({
    initialValues: {
      image: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        let data;
        data = await handleSeekerProfileUpdate(values);
        console.log(data);
      } catch (error) {
        throw new Error(error);
      }
      resetForm({ values: "" });
    },
  });

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
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <input
              className="form-control"
              name="image"
              type="file"
              id="formFile"
              onChange={(e) => {
                formik.setFieldValue("image", e.currentTarget.files[0]);
              }}
              accept="image/*"
            />
          </div>
          <div className="preview_image">
            {formik.values.image ? (
              <Card.Img
                variant="top"
                src={URL.createObjectURL(formik.values.image)}
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
