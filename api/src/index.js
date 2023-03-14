import app from "./app.js";
import "./database/database.js";
import * as dotenv from "dotenv";
dotenv.config();

const { MONGOPORT } = process.env;

async function main() {
    try {
        app.listen(MONGOPORT);
        console.log("server in listening on port 💡", MONGOPORT);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
