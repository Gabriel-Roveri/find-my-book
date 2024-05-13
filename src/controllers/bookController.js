import { book } from "../models/index.js";
import noFound from "../Errors/noFound.js";

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

            resultBook !== null ? res.status(200).json(resultBook) : next(new noFound("The ID not exist!"));
            
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
    static listBooksByFilter = async (req, res, next) => {

        try {
            
            const search = await searchLoader(req.query);

            const resultBook = await book.find(search);

            resultBook !== null ? res.status(200).send(resultBook) : res.status(404).send({ message: "Error on search!" });
            
        } catch (error) {
            next(error);
        }
    };


};

async function searchLoader(params) {

    const { categories, title, min_pages, max_pages } = params;

    const search = {};

    //filtros
    if (categories) search.categories = { $regex: categories, $options: "i" };
    if (title) search.title = { $regex: title, $options: "i" };

    if (min_pages) search.num_pages = { $gte: min_pages };
    if (max_pages) search.num_pages = { $lte: max_pages };

    return search
}
export default BookController;