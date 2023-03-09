import React from "react";

import "../ComingSoon/ComingSoon.css";
import NavBar from "../NavBar/NavBar";

export default function ComingSoon() {
    return (
        <div>
            <NavBar />
            <h1 className="comingSoon">Coming Soon...</h1>
            <div className="spinners"> </div>
        </div>
    );
}
