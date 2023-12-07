import { useContext } from "react";
import { AuthContext } from "../Components/Providers/AuthProvider/AuthProvider";

const UseAuth = () => {
    const authUtils = useContext(AuthContext)
    return authUtils
};

export default UseAuth;