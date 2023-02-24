import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductsModel = new Schema({
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
        contentType: Array,
        data: Buffer,
    },
});

export default mongoose.model("ProductsModel", ProductsModel);
