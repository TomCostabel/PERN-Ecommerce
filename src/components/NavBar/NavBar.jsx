import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginButton } from "../Login/Login";
import "../NavBar/NavBar.css";
import Profile from "../Profile/Profile";
import Filters from "../Filters/Filters.jsx";
import img1 from "../../Imagenes/disney.png";
import img2 from "../../Imagenes/star.png";
import img3 from "../../Imagenes/44.png";

export default function NavBar() {
    const cart = useSelector((state) => state.carrito);
    const [countCart, setCountCart] = useState();
    const { isAuthenticated, user } = useAuth0();
    console.log(cart);

    //--------------------UseEffect------------------->

    useEffect(() => {
        let changuito =
            JSON.parse(localStorage.getItem(user?.nickname.toString())) || [];
        const total = changuito.length;
        setCountCart(total);
    }, []);

    return (
        <div>
            <nav className="container-navbar">
                <div className="conatiner-nav-title">
                    <h2 className="nav-title">EcoTech</h2>
                </div>
                <div className="nav-input-list">
                    <input
                        className="input-navbar"
                        type="text"
                        placeholder="    iPhone, Perfume, Glasses..."
                    />

                    <div className="nav-menu-list">
                        <p>Offers</p>
                        <p>Historial </p>
                        <p>About we </p>
                        <p>Help </p>

                        <Filters />
                    </div>
                </div>

                <div className="container-profileCart">
                    <div className="logos">
                        <img
                            className="img-navbar"
                            src={img1}
                            alt="img-disney"
                        />
                        <img
                            className="img-navbar-star"
                            src={img2}
                            alt="img-start"
                        />
                        <h6 className="offer">
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
                                <p>My shopping</p>
                                <p>Favorites</p>
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
