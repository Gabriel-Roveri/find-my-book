import IncorrectReq from "../Errors/IncorrectReq.js";

async function pagination(req, res, next) {
    try {
        //Paginação
        let { total = 5, page = 1, orderInput = "_id:-1" } = req.query;
        //separando a string order em um array
        let [orderField, order] = orderInput.split(":");

        //Verificação
        total = parseInt(total);
        page = parseInt(page);
        order = parseInt(order);
        //Resgatando infos de listBook
        const result = req.result;

        if (total > 0 && page > 0) {
            const pageResult = await result.find()
            .sort({[orderField]: order})
            .skip((page - 1) * total)
            .limit(total);

            res.status(200).json(pageResult);
        } else {
            next(new IncorrectReq());
        };
    } catch (error) {
        next(error);
    };
};

export default pagination;