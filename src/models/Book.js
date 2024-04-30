import { Double } from "mongodb";
import mongoose from "mongoose";

//schema
const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    isbn13: { type: Number },
    isbn10: { type: String },
    title: { type: String, require: true },
    categories: { type: String },
    thumbnail: { type: String },
    description: { type: String },
    publish_year: { type: Number },
    average_rating: { type: Double },
    num_pages: { type: Number },
    ratings_count: { type: Number }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;