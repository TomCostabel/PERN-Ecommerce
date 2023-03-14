import app from "./app.js";
import "./database/database.js";
import * as dotenv from "dotenv";
dotenv.config();

const Port = process.env.PORT || 3001;

async function main() {
    try {
        app.listen(Port);
        console.log("server in listening on port 💡", Port);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
