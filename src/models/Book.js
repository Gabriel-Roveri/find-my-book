import mongoose from "mongoose";

//schema
const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, require: true },
    publish_company: { type: String },
    price: { type: Number },
    pages: { type: Number }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;