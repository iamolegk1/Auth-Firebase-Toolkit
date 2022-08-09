import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const BasicForm = (dataForm) => {
  const {
    headerForm,
    subtitle,
    buttonText,
    havingAnAccount,
    linkTo,
    textPath,
  } = dataForm.dataForm;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // acceptTerms: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email must be a valid email")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum"),
      // acceptTerms: Yup.bool().oneOf(
      //   [true],
      //   "You should accept terms and conditions"
      // ),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      className="min-h-screen bg-blue-50 flex justify-center items-center"
      onSubmit={formik.handleSubmit}
    >
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
            {formik.errors.email && formik.touched.email ? (
              <div className="text-xs mb-1 text-red-500">
                {formik.errors.email}
              </div>
            ) : null}
            <input
              type="email"
              placeholder="Email Addres"
              name="email"
              values={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          <div className="mt-4">
            {formik.errors.password && formik.touched.password ? (
              <div className="text-xs mb-1 text-red-500">
                {formik.errors.password}
              </div>
            ) : null}
            <input
              type="password"
              placeholder="Password"
              name="password"
              values={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          {/* <div className="mt-8">
            {formik.errors.acceptTerms && formik.touched.acceptTerms ? (
              <div className="text-xs mb-1 text-red-500">
                {formik.errors.acceptTerms}
              </div>
            ) : null}
            <div className="flex">
              <input
                className="mr-1 w-5 h-5 border-0 focus:ring-0"
                type="checkbox"
                name="acceptTerms"
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="acceptTerms"
                className="text-sm flex items-center"
              >
                <p className="cursor-pointer hover:underline">Accept Terms</p>
                <span className="mx-1">&</span>
                <p className="cursor-pointer hover:underline">Conditions</p>
              </label>
            </div>
          </div> */}
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
    </form>
  );
};

export default BasicForm;
