import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Logout/Logout.css";
import swal from "sweetalert";
import imgLogout from "../../Imagenes/logoutpng.png";

export default function Logout() {
    const { logout } = useAuth0();
    const dropAlert = () => {
        swal({
            title: "The session will be closed.",
            text: "Are you sure? ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Closed session!", {
                    icon: "success",
                });
                logout({ returnTo: window.location.origin });
            } else {
                swal("The session will remain open!");
            }
        });
    };
    return (
        <h6 className="logout" onClick={() => dropAlert()}>
            {/* <h6 className="flecha">▶</h6> */}
            <img className="arrowLogout" src={imgLogout} alt="" />
        </h6>
    );
}
