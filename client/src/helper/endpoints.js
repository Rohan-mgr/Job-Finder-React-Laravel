import { config } from "../config";

export const AUTH_ENDPOINT = {
  adminLogin: config.baseURL + "/adminlogin",
  employerRegister: config.baseURL + "/register/employer",
  seekerRegister: config.baseURL + "/register/seeker",
  employerLogin: config.baseURL + "/login/employer",
  seekerLogin: config.baseURL + "/login/seeker",
};

export const SEEKER_ENDPOINT = {
  seekerUploadProfile: config.baseURL + "/account/seeker/upload_photo",
  getSeekerProfile: config.baseURL + "/account/seeker/profile_pic",
  seekerChangePassword: config.baseURL + "/account/seeker/change_password",
};
