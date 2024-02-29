import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({children}) => {

    const {logged} = useContext(AuthContext)

  return (!logged)? children : <Navigate to ="/"/>
}

export default PublicRoute