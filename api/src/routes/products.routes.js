import { Router } from "express";

import {
    getProducts,
    getProductByTitle,
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:title", getProductByTitle);

export default router;
// SS
