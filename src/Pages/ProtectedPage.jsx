import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  const Auth = useSelector((state) => state?.quiz?.auth);
  if (Auth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedPage;
