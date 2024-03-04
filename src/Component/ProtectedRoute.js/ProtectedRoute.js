import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({role, children, path}) => {
 
 const login = localStorage.getItem('token');
 console.log("login",login)
if(!login){
return <Navigate to= "/" />
}
return<Navigate to="/user-dashboard"/>
 
}
export default ProtectedRoute;
