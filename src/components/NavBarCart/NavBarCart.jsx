import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Imagenes/disney.png";
import img2 from "../../Imagenes/star.png";
import "../NavBarTwo/NavBarTwo.css";
import Profile from "../Profile/Profile";

export default function NavBarCart() {
    return (
        <div className="container-principal-navbartwo">
            <nav className="container-navbar-two">
                <div className="conatiner-nav-title-two">
                    <Link to={"/"}>
                        <h2 className="nav-title-two">Exodus</h2>
                    </Link>
                </div>
                <div className="nav-input-list-two">
                    <input
                        className="input-navbar-two"
                        placeholder="    iPhone, Perfume, Glasses..."
                        type="text"
                    />
                    <div className="nav-menu-list-two">
                        <Link to={"/"}>
                            <p>Inicio</p>
                        </Link>
                        <Link to={"/Sell"}>
                            <p>Sell </p>
                        </Link>
                        <Link to={"/AboutWe"}>
                            <p>About we </p>
                        </Link>
                        <Link to={"/Help"}>
                            <p>Help </p>
                        </Link>
                    </div>
                </div>
                <div className="container-profileCart-two">
                    <div className="logos-two">
                        <img
                            className="img-navbar-two"
                            src={img1}
                            alt="img-disney-two"
                        />
                        <img
                            className="img-navbar-star-two"
                            src={img2}
                            alt="img-start-two"
                        />
                        <h6 className="offer-two">
                            Obtain 40% off after your first purchase.{" "}
                        </h6>
                    </div>

                    <Profile />
                </div>
            </nav>
        </div>
    );
}
