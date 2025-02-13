import * as yup from "yup";

//validate schema of create use-hook-form
export const createSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@gmail\.com$/,
      'Email must be finish by "@gmail.com" .Enable include uppercase, lowercase, number and special character '
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character"
    )
    .oneOf([yup.ref("password")], "Mismatched passwords"),
});

//validate schema of login use-hook-form
export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .matches(
          /^[a-zA-Z0-9.-_]+@gmail\.com$/,
          'Email must be finish by "@gmail.com" .Enable include uppercase, lowercase, number and special character '
        ),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character"
        ),
});

//validate schema of update use-hook-form
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