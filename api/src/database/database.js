import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
// const { DB_PASSWORD, DB_USER } = process.env;
const { MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT } = process.env;

// const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ssblcmh.mongodb.net/DBproducts`;
const url = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}/${MONGOPORT}`;

("mongodb://mongo:FiblLN20BxZqsIZBfxSB@containers-us-west-146.railway.app:5916");
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
