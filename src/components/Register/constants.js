import { formFields as basicFormFields } from "../BasicForm/constants";
import { DEFAULT_INITIAL_VALUES } from "../BasicForm/constants";

export const formFields = {
  ...basicFormFields,
  acceptTerms: "acceptTerms",
};

export const initialValues = {
  ...DEFAULT_INITIAL_VALUES,
  [formFields.acceptTerms]: false,
};
