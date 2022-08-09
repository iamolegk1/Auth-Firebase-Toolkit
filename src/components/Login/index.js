import BasicForm from "../BasicForm";

const Login = () => {
  const fieldsData = {
    headerForm: "Login",
    subtitle: "Please enter your email and password!",
    buttonText: "LOGIN",
    havingAnAccount: "Not a member?",
    linkTo: "/auth",
    textPath: "Sign Up",
  };
  return <BasicForm dataForm={fieldsData} />;
};

export default Login;
