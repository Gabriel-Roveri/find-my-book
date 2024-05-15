import express from "express";
import BookController from "../controllers/bookController.js";
import pagination from "../middlewares/pagination.js";

const routes = express.Router();
                                                                                    
routes
    .get("/books", BookController.listBooks, pagination) //adicionando middleware pagination V
    .get("/books/search", BookController.listBooksByFilter)
    .get("/books/:id", BookController.listBookById)
    .post("/books", BookController.registerBook)
    .put("/books/:id", BookController.updateBook)
    .delete("/books/:id", BookController.deleteBook)

export default routes;