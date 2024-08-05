const jwt = require("jsonwebtoken");
const { UnauthentificatedError } = require("../errors");

const authentificationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthentificatedError ("No token provided");
    }
    
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next(); 
    } catch (error) {
        throw new UnauthentificatedError('Not authorized to access');
    }
}
module.exports = authentificationMiddleware;