import React from "react";
import "../Pagination/Pagination.css";

export default function Pagination(props) {
    return (
        <div className="container-pagination">
            <div className="container-arrows">
                <h3
                    className="botonPrevNext"
                    onClick={props.prevHandler}
                    disabled={props.currentPage <= 1 && true}
                >
                    Previous
                </h3>

                <h3 className="botonPrevNext" onClick={props.nextHandler}>
                    Next
                </h3>
            </div>
            <div>
                <ul className="container-cards">{props.items}</ul>
            </div>
        </div>
    );
}
