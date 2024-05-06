import mongoose from "mongoose";
import book from "../models/Book.js";

class BookController {

    static listBooks = async (req, res, next) => {
        try {
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            next(error);
        } 
    };

    static listBookById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const resultBook = await book.findById(id);

            resultBook !== null ? res.status(200).json(resultBook) : res.status(404).send({ message: "Error on search!" });
            
        } catch (error) {
            //error middleware
            next(error);
        } 
            

    };

    static registerBook = async(req, res, next) => {
        
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Done!", book: newBook });
        } catch (error) {
            next(error);
        }
        
    };

    static updateBook = async (req, res, next) => {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Book has been updated!"});
        } catch (error) {
            next(error);
        } 
    };

    static deleteBook = async (req, res, next) => {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Book has been deleted!"});
        } catch (error) {
            next(error);
        } 
    };

    //Busca por paramêtro
    static listBooksByCategorie = async (req, res, next) => {
        const categories = req.query.categories;

        try {
            const booksByCategorie = await book.find({ "categories": categories });

            booksByCategorie !== null ? res.status(200).send(booksByCategorie) : res.status(404).send({ message: "Error on search!" });
            
        } catch (error) {
            next(error);
        }
    };


};

export default BookController;