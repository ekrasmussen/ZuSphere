const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, "../.env")})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']; //Bearer TOKEN
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.status(401).json({error: "Null Token"});
    jwt.verify(token, process.env.AUTH_TOKENSECRET,(error, user) => {
        if(error) return res.status(403).json({error: error.message});
        req.user = user;
        next();
    })
}

module.exports = {authenticateToken};