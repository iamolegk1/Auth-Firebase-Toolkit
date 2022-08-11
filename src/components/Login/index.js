import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { addClient } from "../../Slice/ClientSlice";
import BasicForm from "../BasicForm";
import Portal from "../Portal";
import ErrorAlert from "../ErrorAlert";

const Login = () => {
  const [isOpenErrorAlert, SetIsOpenErrorAlert] = useState(false);

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
      .catch(() => SetIsOpenErrorAlert(true));
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
      {isOpenErrorAlert && (
        <Portal>
          <ErrorAlert
            textError={"We cannot find an account with that email address "}
          />
        </Portal>
      )}
    </>
  );
};

export default Login;
