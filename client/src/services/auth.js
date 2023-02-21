// import { _getSecureLs, _setSecureLs } from "../helper/storage";
import { httpAuth } from "../helper/http";
import { AUTH_ENDPOINT } from "../helper/endpoints";
import emailjs from "@emailjs/browser";

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

export const handleUserMessage = async (visitorInfo) => {
  const response = await emailjs.send(
    "service_s489jlg",
    "template_or3f7qy",
    visitorInfo,
    "ktE6rh4ERLhuaR3XL"
  );
  return response;
};
