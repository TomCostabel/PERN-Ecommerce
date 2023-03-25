import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, getAllProducts } from "../../redux/actions";
import "../Card/Card.css";

export default function Card(props) {
    const prodFav = useSelector((state) => state.prodFav);

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
                <button
                    className="button-fav"
                    value={props.title}
                    onClick={(e) => dispatch(addFav(e.target.value))}
                >
                    X
                </button>
                <button
                    className="button-fav"
                    value={props.title}
                    onClick={() => console.log("acaaa", prodFav)}
                >
                    r
                </button>
            </div>
        </div>
    );
}
