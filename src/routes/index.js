import express from "express";
import books from "./booksRoutes.js";

const routes = (app) => {
    app.routes("/").get((req, res) => res.status(200).send("NodeJS Test!"));

    app.use(express.json(), books);

};

export default routes;