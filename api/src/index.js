import app from "./app.js";
import "./database/database.js";
async function main() {
    try {
        app.listen(3001);
        console.log("server in listening on port 💡", 3001);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
