import mongoose from "mongoose";
const url =
    "mongodb+srv://TomCostabel:Anguilaverde11@cluster0.ssblcmh.mongodb.net/DBproducts";

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
