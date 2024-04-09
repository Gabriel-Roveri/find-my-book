import mongoose from "mongoose";

async function dbConnection() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.spjtpbt.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0");
    
    return mongoose.connection;
};

export default dbConnection;