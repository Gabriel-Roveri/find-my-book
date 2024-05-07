import mongoose from "mongoose";
import BaseError from "../Errors/baseError.js";
import incorrectReq from "../Errors/IncorrectReq.js";
import ValidationError from "../Errors/ValidationError.js";
import noFound from "../Errors/noFound.js";

function middlewareChooser(error, req, res, next) {
    //Server error streatment
    if (error instanceof mongoose.Error.CastError) {

        new incorrectReq().sendResponse(res);
    } else if (error instanceof mongoose.Error.ValidationError) {   

        new ValidationError(error).sendResponse(res);
    } else if (error instanceof noFound) {
        error.sendResponse(res);
    }else {
        
        new BaseError().sendResponse(res);
    };
};

export default middlewareChooser;