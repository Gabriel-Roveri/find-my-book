import express from "express";
import dbConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conection = await dbConnection();

conection.on("error", (error) => {
    console.error("Erro de conexão", error);
});

conection.once("open", () => {
    console.log("Conexão bem sucedida");
});

const app = express();
routes(app);

app.get("/books/:id", (req, res) => {
    const index = bookSearcher(req.params.id);
    res.status(201).json(books_data[index]);
});

//Changing book title
app.put("/books/:id", (req, res) => {
    const index = bookSearcher(req.params.id);
    books_data[index].title = req.body.title;
    res.status(200).json(books_data);
});

//Delete book
app.delete("/books/:id", (req, res) => {
    const index = bookSearcher(req.params.id);
    books_data.splice(index, 1);
    res.status(200).send("Deleted!");
});

export default app;

