import { EMPLOYER_ENDPOINT } from "../helper/endpoints";
import axios from "axios";
import { httpAuth } from "../helper/http";

export const handleEmployerProfileUpdate = async (
  e,
  employerProfile,
  userId,
  setSelectedImage
) => {
  e.preventDefault();
  const URL = EMPLOYER_ENDPOINT.employerUploadProfile;
  console.log(URL, employerProfile);
  const imgData = new FormData();
  imgData.append("image", employerProfile);
  imgData.append("userId", userId);
  const response = await axios.post(URL, imgData);
  console.log(response);
  setSelectedImage(null);
  return response;
};

export const getEmpoyerProfile = async (id) => {
  const URL = EMPLOYER_ENDPOINT.getEmployerProfile + `/${id}`;
  const response = await httpAuth.get(URL);
  return response;
};

export const deleteEmployerAccount = async (e, id, setMsg) => {
  e.preventDefault();
  const URL = EMPLOYER_ENDPOINT.deleteEmployerAccount + `/${id}`;
  const response = await httpAuth.get(URL);
  setMsg(response);
  console.log(response);
  return response;
};

export const handleEmployerPasswordUpdate = async (passwordInfo, id) => {
  const URL = EMPLOYER_ENDPOINT.employerChangePassword;
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
