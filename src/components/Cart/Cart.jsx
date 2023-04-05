import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import "../Cart/Cart.css";
import Loading from "../Loading/Loading";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import NavBarTwo from "../NavBarTwo/NavBarTwo";

export default function Carrito() {
    const products = useSelector((state) => state.productos);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();
    const { user } = useAuth0();

    //----------------------------UseEffect------------------------>
    useEffect(() => {
        dispatch(getAllProducts());
        let changuito2 =
            JSON.parse(localStorage.getItem(user?.nickname.toString())) || [];
        setCart(changuito2);
    }, [dispatch, setCart, user?.nickname]);

    var totalCantidad = 0;

    setTimeout(() => {
        setLoading(false);
    }, 500);

    //----------------------------Return------------------------>

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="containerCart-principal">
                    <NavBarTwo />
                    <br></br>

                    <div className="containerCart-encuadre">
                        <div className="scroll-container">
                            {products?.map((e) => {
                                var count = 0;

                                if (cart?.includes(e.title)) {
                                    //-------------------------------------- ELIMINAR TODOS DEL LocalStorage ------------------//
                                    const deleteAllProducts = (value) => {
                                        {
                                            swal({
                                                title: `It will delete the ${count} products.`,
                                                text: "Are you sure? ",
                                                icon: "warning",
                                                buttons: true,
                                                dangerMode: true,
                                            }).then((willDelete) => {
                                                if (willDelete) {
                                                    swal("Removed products!", {
                                                        icon: "success",
                                                    });
                                                    let deleteAll = cart.filter(
                                                        (e) => e !== value
                                                    );
                                                    setCart(deleteAll);

                                                    localStorage.setItem(
                                                        user.nickname.toString(),
                                                        JSON.stringify(
                                                            deleteAll
                                                        )
                                                    );
                                                } else {
                                                    swal(
                                                        "The products will remain in the cart."
                                                    );
                                                }
                                            });
                                        }
                                    };
                                    //-------------------------------------- RESTAR PRODUCTOS AL LocalStorage ------------------//

                                    const restarProducto = (value) => {
                                        let arr1 = [...cart];
                                        arr1.splice(arr1.indexOf(value), 1);

                                        setCart(arr1);
                                        // console.log(arr1);
                                        localStorage.setItem(
                                            user.nickname.toString(),
                                            JSON.stringify(arr1)
                                        );
                                    };

                                    //-------------------------------------- SUMAR PRODUCTOS AL LocalStorage ------------------//

                                    const sumarProducto = (value) => {
                                        let newVariable = [...cart, value];
                                        setCart(newVariable);
                                        localStorage.setItem(
                                            user.nickname.toString(),
                                            JSON.stringify(newVariable)
                                        );
                                    };

                                    //-------------------------------------- Return ----------------------------------------//

                                    return (
                                        <div className="testeo" key={e.id}>
                                            <div className="container-cada-producto">
                                                <img
                                                    className="image"
                                                    src={e.images}
                                                    alt="fotoproduct"
                                                />

                                                {cart.forEach((el) =>
                                                    el === e.title
                                                        ? (count = count + 1)
                                                        : count
                                                )}

                                                {cart.forEach((el) =>
                                                    el === e.title
                                                        ? (totalCantidad =
                                                              totalCantidad +
                                                              e.price)
                                                        : count
                                                )}
                                                <div className="button-and-title">
                                                    <h5 className="title">
                                                        {e.title}
                                                    </h5>
                                                    <br />
                                                    <button
                                                        className="button-delete"
                                                        onClick={() =>
                                                            deleteAllProducts(
                                                                e.title
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                                <div className="sumar-restar">
                                                    {count == 1 ? (
                                                        // ---Button restar producto---

                                                        <button
                                                            disabled
                                                            className="button-masmenos"
                                                            onClick={() =>
                                                                restarProducto(
                                                                    e.title
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                    ) : (
                                                        // ---Button restar producto---
                                                        <button
                                                            className="button-masmenos"
                                                            onClick={() =>
                                                                restarProducto(
                                                                    e.title
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                    )}
                                                    <p className="count">
                                                        {count}{" "}
                                                    </p>
                                                    {/* ----Button sumar producto---- */}
                                                    <button
                                                        className="button-masmenos"
                                                        onClick={() =>
                                                            sumarProducto(
                                                                e.title
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <h6 className="price-cart">
                                                    $ {e.price * count}
                                                </h6>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className="container-total-pay">
                        <div className="Total">
                            <h1 className="totalPrice">
                                Total ${totalCantidad}
                            </h1>
                            <Link to="/CheckoutPage">
                                <h2 className="pay">Procced to checkout</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
