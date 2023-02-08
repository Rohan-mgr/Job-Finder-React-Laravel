// import { _getSecureLs, _setSecureLs } from "../helper/storage";
import { httpAuth } from "../helper/http";
import { AUTH_ENDPOINT } from "../helper/endpoints";

export const handleAdminLogin = async (adminData) => {
  const URL = AUTH_ENDPOINT.adminLogin;
  console.log(URL);
  const response = await httpAuth.post(URL, JSON.stringify(adminData));
  console.log(response);
  return response;
};
