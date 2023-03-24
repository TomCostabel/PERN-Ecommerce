import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../../Imagenes/disney.png";
import img2 from "../../Imagenes/star.png";
import "../NavBarTwo/NavBarTwo.css";
import Profile from "../Profile/Profile";
import img3 from "../../Imagenes/44.png";
import { LoginButton } from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBarTwo() {
    const [countCart, setCountCart] = useState();
    const cart = useSelector((state) => state.carrito);
    const { isAuthenticated, user } = useAuth0();

    //--------------------UseEffect------------------->

    useEffect(() => {
        let changuito =
            JSON.parse(localStorage.getItem(user?.nickname.toString())) || [];
        const total = changuito.length;
        setCountCart(total);
    });
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
                    {isAuthenticated ? (
                        <div className="cart-count">
                            <div className="cart">
                                <Link to="/Carrito">
                                    <img
                                        className="imgCart"
                                        src={img3}
                                        alt="img-cart"
                                    />
                                </Link>
                                <Link to="/Carrito">
                                    <div className="countCart">{countCart}</div>
                                </Link>
                            </div>
                            <div className="nav-compras">
                                <Link to={"/Favorites"}>
                                    <p>Favorites</p>
                                </Link>
                            </div>
                            <Profile />
                        </div>
                    ) : (
                        <div className="cart-count">
                            <div className="cart">
                                <LoginButton />
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
