import mongoose from "mongoose";
import book from "../models/Book.js";

class BookController {

    static listBooks = async (req, res) => {
        try {
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Error on request!` });
        } 
    };

    static listBookById = async (req, res) => {
        try {
            const id = req.params.id;
            const resultBook = await book.findById(id);

            (resultBook !== null) ? res.status(200).json(resultBook) : res.status(404).send({ message: "Error on search!" });
            
        } catch (error) {
            //tratamento erro interno do servidor
            (error instanceof mongoose.Error.CastError) ? res.status(400).send({ message: "The datum is incorrect!" }) : res.status(500).send({ message: "Internal server error!" });

        } 
            

    };

    static registerBook = async(req, res) => {
        
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Done!", book: newBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Error on register new book!` });
        }
        
    };

    static updateBook = async (req, res) => {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Book has been updated!"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Error on book update!`});
        } 
    };

    static deleteBook = async (req, res) => {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Book has been deleted!"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Error on book deleted!`});
        } 
    };

    //Busca por paramêtro
    static listBooksByCategorie = async (req, res) => {
        const categories = req.query.categories;

        try {
            const booksByCategorie = await book.find({ "categories": categories });

            (booksByCategorie !== null) ? res.status(200).send(booksByCategorie) : res.status(404).send({ message: "Error on search!" });
            
        } catch (error) {
            res.status(500).send({ message: "Internal server error!" });
        }
    };


};

export default BookController;