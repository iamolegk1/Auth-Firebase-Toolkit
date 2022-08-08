import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      <div>AuthPage</div>
      <p>
        Already have an account? <Link to="/login">Sign up</Link>
      </p>
    </>
  );
};

export default AuthPage;
