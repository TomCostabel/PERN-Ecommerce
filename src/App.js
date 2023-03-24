import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import AboutWe from "./components/AboutWe/AboutWe";
import Help from "./components/Help/Help";
import Sell from "./components/Sell/Sell";
axios.defaults.baseURL = "http://localhost:3001/";
// axios.defaults.baseURL = "https://ecommerce1233.up.railway.app";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Product/:id" element={<CardDetail />} />
            <Route path="/Carrito" element={<Cart />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/AboutWe" element={<AboutWe />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Offers" element={<ComingSoon />} />
            <Route path="/MyShopping" element={<ComingSoon />} />
            <Route path="/Favorites" element={<ComingSoon />} />
            <Route path="/PaymentMethods" element={<ComingSoon />} />
        </Routes>
    );
}

export default App;
