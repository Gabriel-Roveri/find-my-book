import express from "express";
import dbConnection from "./config/dbConnect.js";

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
//Test data
const books_data = [
    { "id": 1, "title": "Tin" },
    {"id":2,"title":"Home Ing"},
    {"id":3,"title":"Tres-Zap"},
    {"id":4,"title":"Bitchip"},
    {"id":5,"title":"Alpha"},
    {"id":6,"title":"Temp"},
    {"id":7,"title":"Mat Lam Tam"},
    {"id":8,"title":"Tampflex"},
    {"id":9,"title":"Sub-Ex"},
    {"id":10,"title":"Zathin"},
    {"id":11,"title":"Matsoft"},
    {"id":12,"title":"Tampflex"},
    {"id":13,"title":"Toughjoyfax"},
    {"id":14,"title":"Lotlux"},
    {"id":15,"title":"Andalax"},
    {"id":16,"title":"Holdlamis"},
    {"id":17,"title":"Ventosanzap"},
    {"id":18,"title":"Alphazap"},
    {"id":19,"title":"Konklab"},
    { "id": 20, "title": "Matsoft" }
]

function bookSearcher(id) {
    return books_data.findIndex(book => {
        return book.id === Number(id);
    })
};

app.get("/", (req, res) => {
    res.status(200).send("Express test");
});

app.get("/books", (req, res) => {
    res.status(200).json(books_data);
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

