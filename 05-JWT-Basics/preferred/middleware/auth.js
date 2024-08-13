const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({msg: 'No token provided'})
    }

    const token = authHeader.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, name } = decoded;
        req.user = { id, name };
        next();
    } catch (error) {
        return res.status(401).json({msg: 'Not authorized'});
    }
}

module.exports = authenticationMiddleware;