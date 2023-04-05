import React, { useState } from "react";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import img from "../../Imagenes/Vender.png";
import img3 from "../../Imagenes/Estadisticas.jpg";
import "../Sell/Sell.css";
import gmail from "../../Imagenes/correo-electronico.png";
import swal from "sweetalert";
import Loading from "../Loading/Loading";

export default function Sell() {
    const [loading, setLoading] = useState(true);

    const dropAlert = () => {
        swal("📧Future redirect");
    };

    setTimeout(() => {
        setLoading(false);
    }, 1000);
    return loading ? (
        <Loading />
    ) : (
        <div>
            <NavBarTwo />
            <div className="container-img-sell">
                <div className="container-white-sell">
                    <h3 className="text-sell-title">
                        We are very grateful that you choose our web to sell
                        your products.
                    </h3>
                    <img
                        className="imgSell"
                        src={img}
                        alt="Imagen descriptiva de 'Sell' "
                    />
                    <h3 className="text-sell">
                        We have no doubt that this will represent an increase in
                        your sales statistics.
                    </h3>

                    <img
                        className="imgSell"
                        src={img3}
                        alt="Imagen descriptiva de 'Sell' "
                    />
                    <h3 className="text-sell">
                        Please contact us via gmail. After a few simple steps,
                        you can be officially a verified seller of "Exodus".
                    </h3>
                    <button
                        onClick={() => dropAlert()}
                        className="button-gmail-sell"
                    >
                        <img className="gmail" src={gmail} alt="logo-gmail" />
                    </button>
                </div>
            </div>
        </div>
    );
}
