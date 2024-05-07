import IncorrectReq from "./IncorrectReq.js";

class ValidationError extends IncorrectReq {
    constructor(error) {
        const errorMessage = Object.values(error.errors)
        .map(error => error.message)
        .join(";");
        
        super(`Errors found: ${errorMessage}` );
    };
};

export default ValidationError;