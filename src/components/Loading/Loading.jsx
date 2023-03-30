import React from "react";
import "../Loading/Loading.css";
import NavBarTwo from "../NavBarTwo/NavBarTwo";

export default function Loading() {
    return (
        <div className="container-loading">
            <NavBarTwo />
            <div className="spinner"> </div>
        </div>
    );
}
