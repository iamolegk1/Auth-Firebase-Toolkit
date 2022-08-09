import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addClient } from "../../Slice/ClientSlice";
import BasicForm from "../BasicForm";
import { validationSchema } from "./validation";
import { formFields, initialValues } from "./constants";
import FormikCheckbox from "../FormikCheckbox";

const Register = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          addClient({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        history("/");
      })
      .catch(console.error);
  };

  const fieldsData = {
    headerForm: "Sign Up",
    subtitle: "Create an account to see everything about the life of dogs!",
    buttonText: "Create Account",
    havingAnAccount: "Already Have An Account?",
    linkTo: "/login",
    textPath: "Sign In",
  };

  return (
    <BasicForm
      dataForm={fieldsData}
      handleClick={handleRegister}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <FormikCheckbox name={formFields.acceptTerms} />
    </BasicForm>
  );
};

export default Register;
