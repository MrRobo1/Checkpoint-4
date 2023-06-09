const Joi = require('joi');

const validateUser = (user, createMod) => {
    const mode = createMod ? "required" : "optional";

    const result = Joi.object({
        firstName: Joi.string().min(3).max(30).presence(mode).pattern(/^[a-zA-Z]+$/),
        lastName: Joi.string().min(3).max(30).presence(mode).pattern(/^[a-zA-Z]+$/),
        email: Joi.string().email().presence(mode),
        password: Joi.string().min(8).max(30).presence(mode)
    }).required().min(1).validate(user, {abortEarly: false}).error;

    if (result) {
        const errorMessages = result.details.map((error) => ({
            message: error.message,
        }));
        return { errorCount: result.details.length, errorMessages};
    }

    return false;
};

module.exports = validateUser;