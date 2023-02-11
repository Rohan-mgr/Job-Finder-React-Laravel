// import { _getSecureLs, _setSecureLs } from "../helper/storage";
import { httpAuth } from "../helper/http";
import { AUTH_ENDPOINT } from "../helper/endpoints";

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

export const handleEmployerRegister = async (employerDetails) => {
  const URL = AUTH_ENDPOINT.employerRegister;
  console.log(URL);
  const response = await httpAuth.post(URL, JSON.stringify(employerDetails));
  return response;
};
