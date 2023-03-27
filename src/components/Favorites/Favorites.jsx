import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import "../Favorites/Favorites.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
export default function Favorites() {
    //---------------------{Declaraciones}-------------------->
    const products = useSelector((state) => state.productos);
    const [loading, setLoading] = useState(true);

    const { user } = useAuth0();
    const dispatch = useDispatch();
    let favs =
        JSON.parse(
            localStorage.getItem(`${user?.nickname}ProductosFavorites`)
        ) || [];
    const itemsFavs = products?.filter((e) => favs?.includes(e.title));

    const deleteFav = (value) => {
        // let deleteAll = cart.filter((e) => e !== value);
        const productoEliminado = favs?.filter(
            (elemento) => elemento !== value
        );
        localStorage.setItem(
            `${user?.nickname}ProductosFavorites`,
            JSON.stringify(productoEliminado)
        );
    };

    //---------------------{UseEffect}------------------------>
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch, favs]);

    //---------------------{Return}--------------------------->
    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return loading ? (
        <Loading />
    ) : (
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
                                <button
                                    className="button-delete-favs"
                                    value={e.title}
                                    onClick={(e) => deleteFav(e.target.value)}
                                >
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
