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

export const handlePostJob = async (e, jobInfo, empId) => {
  e.preventDefault();
  const URL = EMPLOYER_ENDPOINT.postJob;
  console.log(URL);
  console.log(jobInfo);

  const jobData = new FormData();
  jobData.append("jobTitle", jobInfo.jobTitle);
  jobData.append("companyLogo", jobInfo.companyLogo);
  jobData.append("jobCategory", jobInfo.jobCategory);
  jobData.append("jobType", jobInfo.jobType);
  jobData.append("jobLevel", jobInfo.jobLevel);
  jobData.append("vacancy", jobInfo.vacancy);
  jobData.append("jobLocation", jobInfo.jobLocation);
  jobData.append("skills", jobInfo.skills);
  jobData.append("education", jobInfo.education);
  jobData.append("experience", jobInfo.experience);
  jobData.append("salary", jobInfo.salary);
  jobData.append("description", jobInfo.description);
  jobData.append("empId", empId);

  const response = await axios.post(URL, jobData);
  console.log(response);
  return response;
};

export const getEmployerPostedJob = async (id) => {
  const URL = EMPLOYER_ENDPOINT.getPostedJob + `/${id}`;
  const response = await httpAuth.get(URL);
  return response;
};
export const handleDeleteJob = async (id) => {
  const URL = EMPLOYER_ENDPOINT.deleteJob + `/${id}`;
  console.log(URL);
  const response = await httpAuth.delete(URL);
  return response;
};
