import { config } from "../config";

export const AUTH_ENDPOINT = {
  adminLogin: config.baseURL + "/adminlogin",
  employerRegister: config.baseURL + "/register/employer",
  employerLogin: config.baseURL + "/login/employer",
};
