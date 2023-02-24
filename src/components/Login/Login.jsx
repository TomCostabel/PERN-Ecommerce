import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Login/Login.css";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button className="buttonLogin" onClick={() => loginWithRedirect()}>
            Login
        </button>
    );
};
