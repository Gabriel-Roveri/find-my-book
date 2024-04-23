import express from "express";
import dbConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conection = await dbConnection();

conection.on("error", (error) => {
    console.error("Error on connection!", error);
});

conection.once("open", () => {
    console.log("Connection has been sucessful!");
});

const app = express();
routes(app);

export default app;

