import { useContext } from "react";
import { AuthContext } from "../Context/AppContextProvider";
import { Navigate } from "react-router-dom";

export default function PrivatesRoutes({ children }) {


    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/login" />
        console.log('PrivatesRoutes:', isAuth)
    }

    return children;
}