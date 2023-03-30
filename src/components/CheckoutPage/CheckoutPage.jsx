import React, { useState } from "react";
import "../CheckoutPage/CheckoutPage.css";
import Loading from "../Loading/Loading";
import NavBarTwo from "../NavBarTwo/NavBarTwo";
export default function CheckoutPage() {
    const [loading, setLoading] = useState(true);

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
                        <label for="name">Name</label>
                        <input
                            className="input-check"
                            id="name"
                            maxlength="20"
                            type="text"
                        />
                    </div>
                    <div className="field-container">
                        <label for="cardnumber">Card Number</label>
                        <input
                            className="input-check"
                            id="cardnumber"
                            type="text"
                            pattern="[0-9]*"
                            inputmode="numeric"
                        />
                        <svg
                            id="ccicon"
                            className="ccicon"
                            width="750"
                            height="471"
                            viewBox="0 0 750 471"
                            version="1.1"
                        ></svg>
                    </div>
                    <div className="field-container">
                        <label for="expirationdate">Expiration (mm/yy)</label>
                        <input
                            className="input-check"
                            id="expirationdate"
                            type="text"
                            pattern="[0-9]*"
                            inputmode="numeric"
                        />
                    </div>
                    <div className="field-container">
                        <label for="securitycode">Security Code</label>
                        <input
                            placeholder="***"
                            className="input-check"
                            id="securitycode"
                            type="text"
                            pattern="[0-9]*"
                            inputmode="numeric"
                        />
                    </div>
                    <button className="button-pagar">Pay</button>
                </div>
            </div>
        </div>
    );
}
