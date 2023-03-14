import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Auth0Provider
                    domain="dev-8seoamhcfag503c4.us.auth0.com"
                    clientId="lY6h383325CGJcfKsKD9zHTEHuRpRvk1"
                    redirectUri={window.location.origin}
                    useRefreshTokens={true}
                    cacheLocation="memory"
                    sameSite="lax"
                >
                    <App />
                </Auth0Provider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
