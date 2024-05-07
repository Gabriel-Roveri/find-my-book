import express from "express";
import dbConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";
import middlewareChooser from "./middlewares/middlewareChooser.js";
import middleware404 from "./middlewares/middleware404.js";

const conection = await dbConnection();

conection.on("error", (error) => {
    console.error("Error on connection!", error);
});

conection.once("open", () => {
    console.log("Connection has been sucessful!");
});

const app = express();
routes(app);

app.use(middleware404);
//Error middleware
app.use(middlewareChooser);



export default app;

