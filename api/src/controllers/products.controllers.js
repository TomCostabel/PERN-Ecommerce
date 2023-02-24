import axios from "axios";
import "../database/database.js";
import ProductsModel from "../models/Product.js";

const apiAxios = async () => {
    const api = await axios.get("https://dummyjson.com/products?limit=100");

    const apiData = api.data.products.map((e) => {
        return {
            id: e.id,
            title: e.title,
            description: e.description,
            price: e.price,
            category: e.category,
            images: e.images,
        };
    });

    return apiData;
};

//------------------------------------------->
const productsDB = async () => {
    let info = await apiAxios();

    info.forEach((e) => {
        if (!ProductsModel(e)) ProductsModel(e).save();
    });

    const product = await ProductsModel.find();

    return product;
};

//------------------------------------------->

export const getProducts = async (req, res) => {
    try {
        const datosApi = await apiAxios();
        res.json(datosApi);
        // const datosDB = await productsDB();
        // res.json(datosDB);
    } catch (error) {
        console.log({ message: error.message });
    }
};

//------------------------------------------->

export const getProductByTitle = async (req, res) => {
    try {
        const { _id, id, title } = req.params;
        const product = await ProductsModel.find({ title });

        res.json(product);
    } catch (error) {
        console.log({ message: error.message });
    }
};

//------------------------------------------->
