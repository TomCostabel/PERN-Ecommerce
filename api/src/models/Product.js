import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductsModels = new Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },

    category: {
        type: String,
    },
    //------> ARREGLAR EL TYPE DE LA IMAGEN
    images: {
        type: String,
        // data: Buffer,
    },
});

export default mongoose.model("ProductsModel", ProductsModels);
