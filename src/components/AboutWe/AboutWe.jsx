import React, { useState } from "react";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import "../AboutWe/AboutWe.css";
import img from "../../Imagenes/empresa.png";
import Loading from "../Loading/Loading";
export default function AboutWe() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);
    return loading ? (
        <Loading />
    ) : (
        <div>
            <NavBarTwo />
            <div className="container-aboutwe">
                <div className="aboutwe-text">
                    <div className="text">
                        <h2 className="h2">
                            We are a brand 100% dedicated to its customers. Our
                            business history began in 2014, and since then we
                            have striven to meet every need within our reach. We
                            have a wonderful working environment, to which we
                            give credit for our success.
                        </h2>
                        <img className="img-aboutwe" src={img} />
                    </div>
                </div>
            </div>
        </div>
    );
}
