const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, "../.env")})

function jwtTokens({id, username, email, perms}) {
    const user = {id, username, email, perms};
    const accessToken = jwt.sign(user, process.env.AUTH_TOKENSECRET, {expiresIn:'20s'});
    const refreshToken = jwt.sign(user, process.env.AUTH_REFRESH_TOKEN, {expiresIn: '5m'});

    return({accessToken,refreshToken});
}

module.exports = { jwtTokens };