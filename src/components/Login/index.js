import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { addClient } from "../../Slice/ClientSlice";
import BasicForm from "../BasicForm";
import Portal from "../Portal";

const Login = () => {
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => setIsOpenErrorModal(true));
  };

  const fieldsData = {
    headerForm: "Login",
    subtitle: "Please enter your email and password!",
    buttonText: "LOGIN",
    havingAnAccount: "Not a member?",
    linkTo: "/auth",
    textPath: "Sign Up",
  };

  return (
    <>
      <BasicForm dataForm={fieldsData} handleClick={handleLogin} />
      {isOpenErrorModal && (
        <Portal>
          <p>Portal</p>
        </Portal>
      )}
    </>
  );
};

export default Login;
