import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children}) => {

 const login = localStorage.getItem('token');
 console.log("login",login)
if(!login){
return <Navigate to= "/" />
}
return children

}
export default ProtectedRoute;