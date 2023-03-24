import React from "react";
import "../Loading/Loading.css";
import NavBarTwo from "../NavBarTwo/NavBarTwo";

export default function Loading() {
    return (
        <div>
            <NavBarTwo />
            <div className="spinner"> </div>
        </div>
    );
}
