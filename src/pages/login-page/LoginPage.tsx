import React from "react";
import Login from "../../components/templates/login";
import { useNavigate } from "react-router-dom";

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <Login
      onLogin={async (credential) => {
        console.log(credential);
        console.log("foi");
        navigate("/");
        return undefined;
      }}
    />
  );
};

export default LoginPage;
