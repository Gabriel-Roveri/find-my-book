import mongoose from "mongoose";

function middlewareChooser(error, req, res, next) {
    //Server error streatment
    error instanceof mongoose.Error.CastError ? res.status(400).send({ message: "The datum is incorrect!" }) : res.status(500).send({ message: "Internal server error!" });

};

export default middlewareChooser;