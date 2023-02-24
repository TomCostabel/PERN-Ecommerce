import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getAllProducts } from "../../redux/actions";
import "../Filters/Filters.css";

export default function Filters() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productos2);

    function handleFilterByCategory(e) {
        e.target.value === "none"
            ? dispatch(getAllProducts())
            : dispatch(filterByCategory(e.target.value));
    }
    const array = [];
    products.map((e) =>
        !array.includes(e.category) ? array.push(e.category) : null
    );
    return (
        <div className="select-categories">
            <select
                // size="3"
                // aria-label="size 3 select example"
                onChange={(e) => handleFilterByCategory(e)}
            >
                <option value={"all"}>Categories</option>

                {array?.map((e) => (
                    <option key={e} value={e.name}>
                        {e}
                    </option>
                ))}
            </select>
        </div>
    );
}
