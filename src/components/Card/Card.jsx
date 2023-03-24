import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Card/Card.css";

export default function Card(props) {
    // ARREGLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR

    const [fav, setFav] = useState([]);
    const addFav = (e) => {
        if (!fav.length) setFav(e);
        console.log(fav);
        if (!fav.includes(e.toString())) {
            setFav(e.toString());
            localStorage.setItem("Products fav", JSON.stringify(fav));
        }

        // console.log(localStorage.getItem("Products fav"));
    };
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
                    onClick={(e) => {
                        addFav(e.target.value);
                    }}
                >
                    X
                </button>
            </div>
        </div>
    );
}
