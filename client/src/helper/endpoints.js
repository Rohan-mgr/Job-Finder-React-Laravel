import { config } from "../config";

export const AUTH_ENDPOINT = {
  adminLogin: config.baseURL + "/adminlogin",
  employerRegister: config.baseURL + "/register/employer",
  seekerRegister: config.baseURL + "/register/seeker",
  employerLogin: config.baseURL + "/login/employer",
  seekerLogin: config.baseURL + "/login/seeker",
  adminDashboard: config.baseURL + "/admin/dashboard",
  adminEmployerDetails: config.baseURL + "/admin/employer_details",
  adminSeekerDetails: config.baseURL + "/admin/seeker_details",
  adminEmployerDelete: config.baseURL + "/admin/employer_delete",
  adminSeekerDelete: config.baseURL + "/admin/seeker_delete",
  adminTestimonial: config.baseURL + "/admin/testimonials",
  adminFetchTestimonials: config.baseURL + "/admin/fetch_testimonials",
  adminDeleteTestimonial: config.baseURL + "/admin/delete_testimonial",
  adminEditTestimonial: config.baseURL + "/admin/edit_testimonial",
};

export const SEEKER_ENDPOINT = {
  seekerUploadProfile: config.baseURL + "/account/seeker/upload_photo",
  getSeekerProfile: config.baseURL + "/account/seeker/profile_pic",
  seekerChangePassword: config.baseURL + "/account/seeker/change_password",
  seekerUploadCV: config.baseURL + "/account/seeker/cv_cover_letter",
  getSeekerResume: config.baseURL + "/account/seeker/my_resume",
  deleteSeekerAccount: config.baseURL + "/account/seeker/delete_account",
  applyForJob: config.baseURL + "/apply_for_job",
};

export const EMPLOYER_ENDPOINT = {
  employerUploadProfile: config.baseURL + "/account/employer/upload_photo",
  getEmployerProfile: config.baseURL + "/account/employer/profile_pic",
  deleteEmployerAccount: config.baseURL + "/account/employer/delete_account",
  employerChangePassword: config.baseURL + "/account/employer/change_password",
  postJob: config.baseURL + "/account/employer/post_job",
  getPostedJob: config.baseURL + "/account/employer/job_lists",
  getApplicantDetails: config.baseURL + "/account/employer/job_lists/applicant",
  deleteJob: config.baseURL + "/account/employer/delete_job",
};
