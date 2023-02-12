import { config } from "../config";

export const AUTH_ENDPOINT = {
  adminLogin: config.baseURL + "/adminlogin",
  employerRegister: config.baseURL + "/register/employer",
  seekerRegister: config.baseURL + "/register/seeker",
  employerLogin: config.baseURL + "/login/employer",
  seekerLogin: config.baseURL + "/login/seeker",
};
