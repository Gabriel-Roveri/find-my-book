import mongoose from "mongoose";

//schema
const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    //Validação nativa Mongoose
    isbn13: {
        type: Number,
        required: [true, "ISBN is mandatory!"]
    },
    isbn10: { type: String },
    title: {
        type: String,
        required: [true, "Title is mandatory!"]
    },
    categories: { type: String },
    thumbnail: { type: String },
    description: { type: String },
    publish_year: { type: Number },
    average_rating: { type: Number },
    num_pages: { type: Number },
    ratings_count: { type: Number }
});

const book = mongoose.model("book", bookSchema);

export default book;