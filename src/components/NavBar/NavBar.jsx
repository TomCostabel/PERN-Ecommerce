import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginButton } from "../Login/Login";
import "../NavBar/NavBar.css";
import { filterByName } from "../../redux/actions";
import Profile from "../Profile/Profile";
import Filters from "../Filters/Filters.jsx";
import img1 from "../../Imagenes/disney.png";
import img2 from "../../Imagenes/star.png";
import img3 from "../../Imagenes/44.png";

export default function NavBar() {
    const cart = useSelector((state) => state.carrito);

    const [countCart, setCountCart] = useState();
    const { isAuthenticated, user } = useAuth0();
    const [buscador, setBuscador] = useState("");
    const dispatch = useDispatch();

    //--------------------UseEffect------------------->

    useEffect(() => {
        dispatch(filterByName(buscador));

        let changuito =
            JSON.parse(localStorage.getItem(user?.nickname.toString())) || [];
        const total = changuito.length;
        setCountCart(total);
    }, [user?.nickname, buscador]);

    const handleChange = (e) => {
        setBuscador(e.target.value);
    };

    return (
        <div>
            <nav className="container-navbar">
                <div className="conatiner-nav-title">
                    <Link to={"/"}>
                        <h2 className="nav-title">Exodus</h2>
                    </Link>
                </div>
                <div className="nav-input-list">
                    <input
                        className="input-navbar"
                        type="text"
                        value={buscador}
                        onChange={(e) => handleChange(e)}
                        placeholder="    iPhone, Perfume, Glasses..."
                    />

                    <div className="nav-menu-list">
                        <Link to={"/Offers"}>
                            <p>Offers</p>
                        </Link>
                        <Link to={"/Historial"}>
                            <p>Historial </p>
                        </Link>
                        <Link to={"/AboutWe"}>
                            <p>About we </p>
                        </Link>
                        <Link to={"/Help"}>
                            <p>Help </p>
                        </Link>

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
                                <Link to={"/MyShopping"}>
                                    <p>My shopping</p>
                                </Link>
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
