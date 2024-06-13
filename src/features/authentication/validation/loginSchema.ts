import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Required field"),
  password: yup.string().required("Required field"),
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Not valid email"
    )
    .required("Required field"),
});
