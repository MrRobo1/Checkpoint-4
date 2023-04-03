const { ModelValidationError } = require("../errors/ModelValidationError.js");
const { InvalidCredentailsError } = require("../errors/InvalidCredentialsError.js");

const errorHandler = (err,req, res) => {
    const errorTypes = [ModelValidationError, InvalidCredentailsError];

    if (errorTypes.some((errorType) => errorType.prototype.isPrototypeOf(err))) {
        res.status(err.statusCode).send(err.details);
    } else {
        return res.sendStatus(500);
    }
};

module.exports = { errorHandler };