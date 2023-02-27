import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import Cart from "./components/Cart/Cart";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Product/:id" element={<CardDetail />} />
            <Route path="/Carrito" element={<Cart />} />
        </Routes>
    );
}

export default App;
