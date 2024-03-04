import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Comp } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // Token not found, user is not logged in
        console.log("User is not logged in");
        navigate("/login");
      } else {
        // Token found, user is logged in
        console.log("User is logged in");
      }
    };

    checkLoginStatus();
  }, [navigate]);

  return <Comp />;
};

export default ProtectedRoute;
