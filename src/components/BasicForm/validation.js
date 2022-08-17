import * as Yup from "yup";

import { formFields } from "./constants";

export const BASIC_EMAIL_VALIDATION = Yup.string()
  .email("Email must be a valid email")
  .required("Email is required");

export const BASIC_PASSWORD_VALIDATION = Yup.string()
  .required("Password is required")
  .min(6, "Password is too short - should be 6 chars minimum");

export const DEFAULT_BASIC_FORM_VALIDATION_SCHEMA = Yup.object({
  [formFields.email]: BASIC_EMAIL_VALIDATION,
  [formFields.password]: BASIC_PASSWORD_VALIDATION,
});
