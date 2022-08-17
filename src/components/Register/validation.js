import * as Yup from "yup";

import {
  BASIC_EMAIL_VALIDATION,
  BASIC_PASSWORD_VALIDATION,
} from "../BasicForm/validation";
import { formFields } from "./constants";

export const validationSchema = Yup.object({
  [formFields.email]: BASIC_EMAIL_VALIDATION,
  [formFields.password]: BASIC_PASSWORD_VALIDATION,
  [formFields.acceptTerms]: Yup.boolean().oneOf(
    [true],
    "Must Accept Terms and Conditions"
  ),
});
