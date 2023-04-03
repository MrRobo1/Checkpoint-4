const { decodeJWT } = require("../helper/jwt.helper");

const authorization = async (req, res, next) => {
    
    try {
        const token = req.cookies.auth_token;

        if (!token) throw new Error("No authorization header");
        
        const data = decodeJWT(token);

        req.userId = data.id;
        req.userName = data.firstname;

        return next();

    } catch (err) {
        res.sendStatus(401);
    }

};

module.exports = authorization;