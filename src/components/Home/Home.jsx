import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import Card from "../Card/Card";
import "../Home/Home.css";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

export default function Home() {
    //------------------------------ "CONSTANTES" -------------------------------------------------->

    const [productsActuales, setProductsActuales] = useState([]);
    const products = useSelector((state) => state.productos);
    const favs = useSelector((state) => state.prodFav);

    const [currentPage, setCurrentPage] = useState(0);
    const productsInput = useSelector((state) => state.productosInput);
    const [loading, setLoading] = useState(true);
    const [buscador, setBuscador] = useState([]);
    const [datos, setDatos] = useState([]);
    const dispatch = useDispatch();
    const itemXPage = 15;

    //------------------------------ "useEffect" --------------------------------------------------->

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    //---------------------------------//

    useEffect(() => {
        !productsInput ? setBuscador([]) : setBuscador(productsInput);
        if (products.length < 15) setCurrentPage(0);
        if (products.length && !datos.length) setDatos(products);
        setProductsActuales(
            datos.slice(
                currentPage * itemXPage,
                currentPage * itemXPage + itemXPage
            )
        );
    }, [dispatch, currentPage, datos, products, itemXPage, productsInput]);

    //---------------------------------//

    useEffect(() => {
        !buscador.length
            ? setDatos(products)
            : setDatos(
                  products?.filter((el) => {
                      return el.title
                          .toLowerCase()
                          .includes(buscador.toLowerCase())
                          ? el
                          : null;
                  })
              );
    }, [buscador, products]);

    //------------------------------ "Next and Prev" ------------------------------------------------>

    const nextHandler = () => {
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * itemXPage;

        if (productsActuales.length < 11) return;
        setProductsActuales(
            [...datos].slice(firstIndex, firstIndex + itemXPage)
        );
        setCurrentPage(nextPage);
    };

    //---------------------------------//

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemXPage;

        setProductsActuales(
            [...datos].slice(firstIndex, firstIndex + itemXPage)
        );
        setCurrentPage(prevPage);
    };

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    //------------------------------ "Return" ------------------------------------------------>

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <div>
                        <NavBar />
                    </div>

                    <div>
                        <div className="conteiner-central">
                            <div>
                                <Pagination
                                    items={productsActuales?.map((e) => {
                                        return (
                                            <Card
                                                key={e.id}
                                                id={e.id}
                                                title={e.title}
                                                description={e.description}
                                                images={e.images}
                                                price={e.price}
                                                category={e.category}
                                            />
                                        );
                                    })}
                                    currentPage={currentPage}
                                    nextHandler={nextHandler}
                                    prevHandler={prevHandler}
                                    prd={products.length}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
