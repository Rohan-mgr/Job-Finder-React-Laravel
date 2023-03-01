// import { _getSecureLs, _setSecureLs } from "../helper/storage";
import { httpAuth } from "../helper/http";
import { AUTH_ENDPOINT } from "../helper/endpoints";
import emailjs from "@emailjs/browser";
import axios from "axios";

export const handleAdminLogin = async (adminData) => {
  const URL = AUTH_ENDPOINT.adminLogin;
  console.log(URL);
  const response = await httpAuth.post(URL, JSON.stringify(adminData));
  return response;
};
export const handleEmployerLogin = async (employerCredentials) => {
  const URL = AUTH_ENDPOINT.employerLogin;
  console.log(URL);
  const response = await httpAuth.post(
    URL,
    JSON.stringify(employerCredentials)
  );
  return response;
};

export const handleSeekerLogin = async (seekerCredentials) => {
  const URL = AUTH_ENDPOINT.seekerLogin;
  console.log(URL);
  const response = await httpAuth.post(URL, JSON.stringify(seekerCredentials));
  return response;
};

export const handleEmployerRegister = async (employerDetails) => {
  const URL = AUTH_ENDPOINT.employerRegister;
  console.log(URL);
  const response = await httpAuth.post(URL, JSON.stringify(employerDetails));
  return response;
};
export const handleSeekerRegister = async (seekerDetails) => {
  const URL = AUTH_ENDPOINT.seekerRegister;
  console.log(URL);
  const response = await httpAuth.post(URL, JSON.stringify(seekerDetails));
  return response;
};
export const handleAdminDashboardDetails = async () => {
  const URL = AUTH_ENDPOINT.adminDashboard;
  console.log(URL);
  const response = await httpAuth.get(URL);
  return response;
};

export const handleUserMessage = async (visitorInfo) => {
  const response = await emailjs.send(
    "service_s489jlg",
    "template_or3f7qy",
    visitorInfo,
    "ktE6rh4ERLhuaR3XL"
  );
  return response;
};

export const adminEmployerDetails = async () => {
  const URL = AUTH_ENDPOINT.adminEmployerDetails;
  const response = await httpAuth.get(URL);
  return response;
};
export const adminSeekerDetails = async () => {
  const URL = AUTH_ENDPOINT.adminSeekerDetails;
  const response = await httpAuth.get(URL);
  return response;
};

export const adminEmployerDelete = async (eid) => {
  const URL = AUTH_ENDPOINT.adminEmployerDelete + `/${eid}`;
  console.log(URL);
  const response = await httpAuth.delete(URL);
  return response;
};
export const adminSeekerDelete = async (sid) => {
  const URL = AUTH_ENDPOINT.adminSeekerDelete + `/${sid}`;
  console.log(URL);
  const response = await httpAuth.delete(URL);
  return response;
};

export const handlePostTestimonial = async (e, testimonialInfo) => {
  e.preventDefault();
  const URL = AUTH_ENDPOINT.adminTestimonial;
  console.log(URL, testimonialInfo);

  const testimonialData = new FormData();
  testimonialData.append("clientName", testimonialInfo.clientName);
  testimonialData.append("clientProfile", testimonialInfo.clientProfile);
  testimonialData.append("designation", testimonialInfo.designation);
  testimonialData.append("companyName", testimonialInfo.companyName);
  testimonialData.append("description", testimonialInfo.description);

  const response = await axios.post(URL, testimonialData);
  return response;
};

export const fetchTestimonials = async () => {
  const URL = AUTH_ENDPOINT.adminFetchTestimonials;
  console.log(URL);
  const response = await httpAuth.get(URL);
  return response;
};

export const handleDeleteTestimonial = async (id) => {
  const URL = AUTH_ENDPOINT.adminDeleteTestimonial + `/${id}`;
  console.log(URL);
  const response = await httpAuth.delete(URL);
  return response;
};
export const handleEditTestimonial = async (e, tid, editInfo) => {
  e.preventDefault();
  const URL = AUTH_ENDPOINT.adminEditTestimonial + `/${tid}`;
  console.log(URL, tid, editInfo);

  const editedTestimonialData = new FormData();
  editedTestimonialData.append("clientName", editInfo.clientName);
  editedTestimonialData.append("clientProfile", editInfo.clientProfile);
  editedTestimonialData.append("designation", editInfo.designation);
  editedTestimonialData.append("companyName", editInfo.companyName);
  editedTestimonialData.append("description", editInfo.description);
  const response = await httpAuth.post(URL, editedTestimonialData);
  return response;
};
