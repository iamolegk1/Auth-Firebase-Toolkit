import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import { PATHS } from "./constants";

const { home, login, register, notFound } = PATHS;

const App = () => {
  return (
    <Routes>
      <Route path={home} element={<MainPage />} />
      <Route path={login} element={<LoginPage />} />
      <Route path={register} element={<RegisterPage />} />
      <Route path={notFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
