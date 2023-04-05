import React, { useState } from "react";
import "../CheckoutPage/CheckoutPage.css";
import Loading from "../Loading/Loading";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import img from "../../Imagenes/card.png";
export default function CheckoutPage() {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState({});
    const navigate = useNavigate();
    const [inputPay, setInputPay] = useState({
        name: "",
        numberCard: "",
        expirationCard: "",
        securityCode: "",
    });
    const validaciones = function (input) {
        const error = {};
        if (!input.name) {
            error.name = "Nombre es requerido";
        }
        if (!input.numberCard) {
            error.numberCard = "Number Card es requerido";
        }
        if (!input.expirationCard) {
            error.expirationCard = "Expiration es requerido";
        }
        if (!input.securityCode) {
            error.securityCode = "Security Code es requerido";
        }
        if (input.numberCard.length < 16) {
            error.numberCard = "Number Card no puede tener menos de 16 digitos";
        }
        if (input.securityCode <= 2) {
            error.securityCode =
                "Security Code no puede tener menos de 3 digitos";
        }
        if (/[^0-9 ]+/g.test(input.numberCard)) {
            error.numberCard = "Number Card solo permite numeros";
        }
        if (/[^0-9 ]+/g.test(input.securityCode)) {
            error.numberCard = "securityCode solo permite numeros";
        }
        if (/[^A-Za-z0-9  ]+/g.test(input.name)) {
            error.name = "* Name cannot have special characters or accents.";
        }
        return error;
    };

    const handleSubmit = () => {
        if (err.securityCode) {
            swal("❌", err.securityCode);
            return;
        }
        if (err.numberCard) {
            swal("❌", err.numberCard);
            return;
        }
        if (
            inputPay.name &&
            inputPay.numberCard &&
            inputPay.expirationCard &&
            inputPay.securityCode
        )
            console.log("✔️Compra realizada con exito"),
                swal("✔️Compra realizada con exito"),
                // .then(() => {
                setInputPay({
                    name: "",
                    numberCard: "",
                    expirationCard: "",
                    securityCode: "",
                }),
                navigate("/");
        // });
        else {
            swal("❌Por favor, complete todos los campos");
        }
    };
    const handleChange = (e) => {
        // e.preventDefault();
        setInputPay(() => {
            const nuevoInput = {
                ...inputPay,
                [e.target.name]: e.target.value,
            };
            const error = validaciones(nuevoInput);
            setErr(error);
            return nuevoInput;
        });
    };

    setTimeout(() => {
        setLoading(false);
    }, 500);
    return loading ? (
        <Loading />
    ) : (
        <div className="containerCheck">
            <NavBarTwo />
            <div className="centrar-form">
                <h1 className="title-checkout">
                    Fill in the necessary information to make the payment.
                </h1>
                <div className="form-container">
                    <div className="field-container">
                        <label>Name</label>
                        <input
                            className="input-check"
                            id="name"
                            name="name"
                            maxLength="20"
                            type="text"
                            value={inputPay.name}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="field-container">
                        <label>Card Number </label>
                        <input
                            className="input-check"
                            id="numberCard"
                            type="text"
                            maxLength="16"
                            name="numberCard"
                            value={inputPay.numberCard}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="field-container">
                        <label>Expiration (mm/yy)</label>
                        <input
                            className="input-check"
                            type="text"
                            maxLength="5"
                            value={inputPay.expirationCard}
                            name="expirationCard"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="field-container">
                        <label>Security Code</label>
                        <input
                            placeholder="***"
                            className="input-check"
                            type="text"
                            maxLength="3"
                            value={inputPay.securityCode}
                            name="securityCode"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className="button-pagar"
                    >
                        Pay 💳
                    </button>
                    <div>
                        {" "}
                        <img className="imagen-creaditCard" src={img} />
                    </div>
                </div>
            </div>
        </div>
    );
}
