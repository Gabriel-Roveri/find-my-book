import BaseError from "./baseError.js";

class IncorrectReq extends BaseError {
    constructor() {
        super("The datum is incorrect!", 400);
    };
};

export default IncorrectReq;