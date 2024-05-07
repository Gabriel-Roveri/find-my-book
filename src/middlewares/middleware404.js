import noFound from "../Errors/noFound.js";

function middleware404(req, res, next) {
    const error404 = new noFound();
    next(error404);
};

export default middleware404;