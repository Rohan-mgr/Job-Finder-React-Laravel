import * as yup from "yup";

let passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-_=?])[a-zA-Z0-9!@#$%^&*-_=?]{8,}/g;

export const signupValidation = yup.object().shape({
  fullName: yup.string().min(5).required("Please enter your full name"),
  companyName: yup.string().min(2).required("Please enter company name"),
  email: yup.string().email().required("Please enter your email"),
  number: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Number must be of 10 digit")
    .max(10, "Number must be of 10 digit")
    .required("Please enter your mobile number"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRegex, { message: "Please enter a strong password" })
    .required("Please enter the password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Please enter password"),
});
