import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, getAllProducts } from "../../redux/actions";
import img from "../../Imagenes/corazon.png";
import "../Card/Card.css";

export default function Card(props) {
    const { user } = useAuth0();

    const prodFav =
        JSON.parse(
            localStorage.getItem(`${user?.nickname}ProductosFavoritos`)
        ) || [];

    const dispatch = useDispatch();

    return (
        <div
            className="container-card
        "
        >
            <Link to={`/Product/${props.id}`}>
                <img className="imagen" src={props.images} alt="imagencard" />

                <h6 className="title-font">{props.title}</h6>
            </Link>
            <br></br>

            <div
                className="container-price
            "
            >
                <h6 className="price">$ {props.price}</h6>
                <div className="div-button">
                    {prodFav?.includes(props.title) ? (
                        <button
                            className="button-fav-red"
                            value={props.title}
                            onClick={(e) =>
                                dispatch(addFav(e.target.value, user.nickname))
                            }
                        >
                            ♡
                        </button>
                    ) : (
                        <button
                            className="button-fav"
                            value={props.title}
                            onClick={(e) =>
                                dispatch(addFav(e.target.value, user.nickname))
                            }
                        >
                            ♡
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
