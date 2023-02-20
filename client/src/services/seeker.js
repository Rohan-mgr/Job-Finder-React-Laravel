import { SEEKER_ENDPOINT } from "../helper/endpoints";
import axios from "axios";
import { httpAuth } from "../helper/http";

export const handleSeekerProfileUpdate = async (
  e,
  seekerProfile,
  userId,
  setSelectedImage
) => {
  e.preventDefault();
  const URL = SEEKER_ENDPOINT.seekerUploadProfile;
  console.log(URL, seekerProfile);
  const imgData = new FormData();
  imgData.append("image", seekerProfile);
  imgData.append("userId", userId);
  const response = await axios.post(URL, imgData);
  console.log(response);
  setSelectedImage(null);
  return response;
};
export const handleSeekerCVUpload = async (
  e,
  seekerCV,
  coverLetter,
  userId
) => {
  e.preventDefault();
  const URL = SEEKER_ENDPOINT.seekerUploadCV;
  console.log(URL, seekerCV, coverLetter, userId);
  const cvData = new FormData();
  cvData.append("upload_file", seekerCV);
  cvData.append("cover_letter", coverLetter);
  cvData.append("userId", userId);
  console.log(cvData);
  const response = await axios.post(URL, cvData, {
    headers: { "Content-Type": "application/pdf" },
  });
  console.log(response);
  return response;
};
export const handleSeekerPasswordUpdate = async (passwordInfo, id) => {
  const URL = SEEKER_ENDPOINT.seekerChangePassword;
  const formData = {
    oldPassword: passwordInfo.oldPassword,
    newPassword: passwordInfo.newPassword,
    confirmPassword: passwordInfo.confirmPassword,
    id: id,
  };
  const response = await httpAuth.post(URL, JSON.stringify(formData));
  console.log(response);
  return response;
};

export const getSeekerProfile = async (id) => {
  const URL = SEEKER_ENDPOINT.getSeekerProfile + `/${id}`;
  const response = await httpAuth.get(URL);
  return response;
};

export const getSeekerResume = async (id) => {
  const URL = SEEKER_ENDPOINT.getSeekerResume + `/${id}`;
  const response = await httpAuth.get(URL);
  return response;
};
export const deleteSeekerAccount = async (e, id, setMsg) => {
  e.preventDefault();
  const URL = SEEKER_ENDPOINT.deleteSeekerAccount + `/${id}`;
  console.log(URL);
  const response = await httpAuth.get(URL);
  setMsg(response);
  console.log(response);
  return response;
};

export const getRecentJobs = async () => {
  const URL = "/";
  console.log(URL);
  const response = await httpAuth.get(URL);
  return response;
};
