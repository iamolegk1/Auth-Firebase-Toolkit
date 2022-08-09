import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Content from "../../components/Content";

const MainPage = () => {
  const { id } = useSelector((state) => state.client);
  const clientAuthorized = !!id;

  return clientAuthorized ? <Content /> : <Navigate to="/login" />;
};

export default MainPage;
