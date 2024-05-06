import mongoose from "mongoose";

function middlewareChooser(error, req, res, next) {
    //Server error streatment
    if (error instanceof mongoose.Error.CastError) {

        res.status(400).send({ message: "The datum is incorrect!" });

    } else if (error instanceof mongoose.Error.ValidationError) {
        
        const errorMessage = Object.values(error.errors)
            .map(error => error.message)
            .join(";");
        
        res.status(400).send({ message: `Errors found: ${errorMessage}` });

    } else {
        
        res.status(500).send({ message: "Internal server error!" });

    };
};

export default middlewareChooser;