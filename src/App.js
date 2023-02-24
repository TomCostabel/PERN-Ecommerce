import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

import Cart from "./components/Cart/Cart";

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
