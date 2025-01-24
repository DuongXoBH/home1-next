// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const updateSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@gmail\.com$/,
      'Email must be finish by "@gmail.com" .Enable include uppercase, lowercase, number and special character '
    ),
});