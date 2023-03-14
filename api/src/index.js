import app from "./app.js";
import "./database/database.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.MONGOPORT || 3001;

async function main() {
    try {
        app.listen(PORT);
        console.log("server in listening on port 💡", PORT);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
