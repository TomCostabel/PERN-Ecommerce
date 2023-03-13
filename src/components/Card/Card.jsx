import React from "react";
import { Link } from "react-router-dom";

import "../Card/Card.css";

export default function Card(props) {
    // const dispatch = useDispatch();
    // const titleJoin = props.title.split(" ").join("");
    console.log(props);
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
            </div>
        </div>
    );
}
