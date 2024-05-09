import BaseError from "./baseError.js";

class IncorrectReq extends BaseError {
    constructor(message = "The datum is incorrect!") {
        super(message, 400);
    };
};

export default IncorrectReq;