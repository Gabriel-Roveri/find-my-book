import express from "express";
import dbConnection from "./config/dbConnect.js";
import book from "./models/Book.js";

const conection = await dbConnection();

conection.on("error", (error) => {
    console.error("Erro de conexão", error);
});

conection.once("open", () => {
    console.log("Conexão bem sucedida");
});

const app = express();
//middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Express test");
});

app.get("/books", async (req, res) => {
    const booksList = await book.find({});
    res.status(200).json(booksList);
});

app.get("/books/:id", (req, res) => {
    const index = bookSearcher(req.params.id);
    res.status(201).json(books_data[index]);
});

app.post("/books", (req, res) => {
    books_data.push(req.body);
    res.status(201).send("Done!");
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

