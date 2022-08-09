import BasicForm from "../BasicForm";

const Register = () => {
  const fieldsData = {
    headerForm: "Sign Up",
    subtitle: "Create an account to see everything about the life of dogs!",
    buttonText: "Create Account",
    havingAnAccount: "Already Have An Account?",
    linkTo: "/login",
    textPath: "Sign In",
  };
  return <BasicForm dataForm={fieldsData} />;
};

export default Register;
