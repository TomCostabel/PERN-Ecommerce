import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Logout/Logout.css";

export default function Logout() {
    const { logout } = useAuth0();
    return (
        <h6
            className="logout"
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            <h6 className="flecha">▶</h6>
        </h6>
    );
}
