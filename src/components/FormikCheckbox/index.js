import React from "react";

import { useField, Field } from "formik";

const FormikCheckbox = (name) => {
  const [field, meta] = useField(name);

  return (
    <div className="mt-8">
      {meta.error && meta.touched ? (
        <div className="text-xs mb-1 text-red-500">{meta.error}</div>
      ) : null}
      <div className="flex">
        <Field
          className="mr-1 w-5 h-5 border-0 focus:ring-0"
          id="checkbox"
          type="checkbox"
          name={field.name}
          onBlur={field.onBlur}
        />
        <label htmlFor="acceptTerms" className="text-sm flex items-center">
          <p className="cursor-pointer hover:underline">Accept Terms</p>
          <span className="mx-1">&</span>
          <p className="cursor-pointer hover:underline">Conditions</p>
        </label>
      </div>
    </div>
  );
};

export default FormikCheckbox;
