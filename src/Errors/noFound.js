import BaseError from "./baseError.js";

class noFound extends BaseError{
    constructor(message = "Page is not found!") {
        super(message, 404);
    }
}

export default noFound;