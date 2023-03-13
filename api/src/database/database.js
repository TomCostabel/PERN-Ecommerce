import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const { DB_PASSWORD, DB_USER } = process.env;

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ssblcmh.mongodb.net/DBproducts`;

// Con strictQuery estoy denegando un cambio que se viene en mongoDB 7
mongoose.set("strictQuery", false);
mongoose
    .connect(url, {})
    .then(() => {
        console.log("Base de datos conectada 🔋🔌");
    })
    .catch((err) => {
        console.log(err);
    });
