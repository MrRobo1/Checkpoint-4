const Joi = require('joi');

const validateKingdom = (user, createMod) => {
    const mode = createMod ? "required" : "optional";

    const result = Joi.object({
        name: Joi.string().min(3).max(30).presence(mode).pattern(/^[a-zA-Z]+$/),
    }).required().min(1).validate(user, {abortEarly: false}).error;

    if (result) {
        const errorMessages = result.details.map((error) => ({
            message: error.message,
        }));
        return { errorCount: result.details.length, errorMessages};
    }

    return false;
};

module.exports = validateKingdom;