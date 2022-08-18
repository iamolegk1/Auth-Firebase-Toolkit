import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MainPageContent from "../../components/MainPageContent";

const MainPage = () => {
  const { id } = useSelector((state) => state.client);
  const clientAuthorized = !!id;

  return clientAuthorized ? <MainPageContent /> : <Navigate to="/login" />;
};

export default MainPage;
