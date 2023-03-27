import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import "../Favorites/Favorites.css";
import { Link } from "react-router-dom";
export default function Favorites() {
    //---------------------{Declaraciones}-------------------->
    const products = useSelector((state) => state.productos);
    const { user } = useAuth0();
    const dispatch = useDispatch();
    let favs =
        JSON.parse(
            localStorage.getItem(`${user?.nickname}ProductosFavoritos`)
        ) || [];
    const itemsFavs = products?.filter((e) => favs?.includes(e.title));

    //---------------------{UseEffect}------------------------>
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    //---------------------{Return}--------------------------->

    return (
        <div className="elementos">
            <NavBarTwo />
            <div className="container-centrar">
                <div className="container-items">
                    {itemsFavs?.map((e) => {
                        return (
                            <div className="img-title">
                                <Link to={`/Product/${e.id}`}>
                                    <img
                                        className="img-favoritos"
                                        src={e.images}
                                        alt="Imagen de producto en favoritos"
                                    />
                                </Link>
                                <h1 className="title-prod-fav">{e.title}</h1>
                                <button className="button-delete-favs">
                                    Eliminate
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
