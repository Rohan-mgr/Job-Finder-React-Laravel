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
  console.log(URL);
  const imgData = new FormData();
  imgData.append("image", seekerProfile);
  imgData.append("userId", userId);
  const response = await axios.post(URL, imgData);
  console.log(response);
  setSelectedImage(null);
  return response;
};

export const getSeekerProfile = async (id) => {
  const URL = SEEKER_ENDPOINT.getSeekerProfile + `/${id}`;
  console.log(URL);
  const response = await httpAuth.get(URL);
  console.log(response);
  return response;
};
