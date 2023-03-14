import { addProductCarrito, getAllProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NavBarTwo from "../NavBarTwo/NavBarTwo.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import "../CardDetail/CardDetail.css";
import swal from "sweetalert";

export default function CardDetail() {
    const { id } = useParams();
    const { isAuthenticated, user } = useAuth0();
    const detail = useSelector((state) => state.productos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch, id]);
    const dropAlert2 = () => {
        swal("Coming soon");
    };
    const dropAlert = () => {
        swal("⚠️Before shopping, please sign in");
    };

    return (
        <div>
            <div>
                <NavBarTwo />
            </div>

            {/* De DB id - 3, de la api id - 1 */}
            <br />
            <div className="container-detail">
                <div className="container-encuadre">
                    <div className="container-img">
                        <img
                            className="img-detail"
                            src={detail[id - 1]?.images}
                            alt=""
                        />
                    </div>

                    <div className="agregar-comprar">
                        <div className="encabezado-agregar-comprar">
                            <h6 className="vendidos">
                                Nuevo | +{detail[id - 1]?.title.length * 3}{" "}
                                vendidos
                            </h6>
                            <h1 className="title-detail">
                                {detail[id - 1]?.title}
                            </h1>

                            <h4 className="description-detail">
                                {detail[id - 1]?.description}
                            </h4>
                            <h6 className="category">
                                Category: {detail[id - 1]?.category}
                            </h6>
                            <h3 className="price-detail">
                                $ {detail[id - 1]?.price}
                            </h3>

                            <h6 className="cuotas">
                                in 12x $
                                {(detail[id - 1]?.price / 12 + 3).toFixed()}
                            </h6>
                            <Link to={"/PaymentMethods"}>
                                <h6 className="medios-pago">Payment methods</h6>
                            </Link>
                            <h6 className="envios-gratis">
                                Envio gratis para compras mayoristas.
                            </h6>
                        </div>
                        <div>
                            <h5
                                className="button-comprar"
                                onClick={() => dropAlert2()}
                            >
                                Buy now
                            </h5>
                            {isAuthenticated ? (
                                <button
                                    type="button"
                                    className="button-agregar"
                                    value={detail[id - 1]?.title}
                                    onClick={(e) => {
                                        dispatch(
                                            addProductCarrito(
                                                e.target.value,
                                                user.nickname
                                            )
                                        );
                                    }}
                                >
                                    Add to cart
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="button-agregar"
                                    value={detail[id - 1]?.title}
                                    onClick={() => dropAlert()}
                                >
                                    Add to cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
