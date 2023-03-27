import React, { useState } from "react";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import img from "../../Imagenes/asistentevirtual.jpg";
import wsp from "../../Imagenes/whatsapp.png";
import gmail from "../../Imagenes/correo-electronico.png";
import telephone from "../../Imagenes/telephone.png";
import swal from "sweetalert";

import "../Help/Help.css";
import Loading from "../Loading/Loading";

export default function Help() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);
    const dropAlert = () => {
        swal("📧Future redirect");
    };
    return loading ? (
        <Loading />
    ) : (
        <div>
            <NavBarTwo />
            <div className="container-img-help">
                <div className="container-white">
                    <h3 className="text-help">
                        For us it is essential to provide all the necessary
                        attention and thus solve any inconvenience.
                    </h3>
                    <img
                        className="img"
                        src={img}
                        alt="Imagen descriptiva de 'Help' "
                    />
                    <h3 className="text-help">
                        Where would you prefer us to contact you?
                    </h3>
                    <div className="buttons-help">
                        <button onClick={() => dropAlert()} className="button">
                            <img className="gmail" src={gmail} />{" "}
                        </button>
                        <button onClick={() => dropAlert()} className="button">
                            <img className="wsp" src={wsp} />
                        </button>
                        <button onClick={() => dropAlert()} className="button">
                            <img className="telephone" src={telephone} />{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
