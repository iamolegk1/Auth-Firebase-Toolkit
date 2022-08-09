import { Link } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import { DEFAULT_INITIAL_VALUES, formFields } from "./constants";
import { DEFAULT_BASIC_FORM_VALIDATION_SCHEMA } from "./validation";

const BasicForm = ({
  dataForm,
  handleClick,
  initialValues = DEFAULT_INITIAL_VALUES,
  validationSchema = DEFAULT_BASIC_FORM_VALIDATION_SCHEMA,
  children,
}) => {
  const {
    headerForm,
    subtitle,
    buttonText,
    havingAnAccount,
    linkTo,
    textPath,
  } = dataForm;

  const onSubmit = (values) => {
    const { email, password } = values;
    handleClick(email, password);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => {
        return (
          <Form className="min-h-screen bg-blue-50 flex justify-center items-center">
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
              <div>
                <h1 className="text-2xl font-bold text-center mb-4 cursor-pointer">
                  {headerForm}
                </h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                  {subtitle}
                </p>
              </div>
              <div>
                <div>
                  {errors[formFields.email] && touched[formFields.email] ? (
                    <div className="text-xs mb-1 text-red-500">
                      {errors[formFields.email]}
                    </div>
                  ) : null}
                  <Field
                    type={formFields.email}
                    id={formFields.email}
                    placeholder="Email Addres"
                    name={formFields.email}
                    values={values[formFields.email]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                </div>
                <div className="mt-4">
                  {errors[formFields.password] &&
                  touched[formFields.password] ? (
                    <div className="text-xs mb-1 text-red-500">
                      {errors[formFields.password]}
                    </div>
                  ) : null}
                  <Field
                    type={[formFields.password]}
                    placeholder="Password"
                    name={formFields.password}
                    values={values[formFields.password]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                </div>
                {children}
              </div>
              <div className="text-center mt-6">
                <button className="py-3 w-64 text-xl text-white bg-blue-500 hover:bg-blue-700 duration-300 rounded-2xl">
                  {buttonText}
                </button>
                <p className="mt-8 text-sm">
                  {havingAnAccount}
                  <span className="font-medium ml-1 cursor-pointer hover:underline">
                    <Link to={linkTo}>{textPath}</Link>
                  </span>
                </p>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BasicForm;
