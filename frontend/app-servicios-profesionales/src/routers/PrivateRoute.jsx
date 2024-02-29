import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);
  return (logged) ? children : <Navigate to ="/"/>
}

export default PrivateRoute