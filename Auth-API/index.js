const express = require('express');
const path = require('path');
const cors = require('cors'); 
const cookieParser = require('cookie-parser')
const usersRouter = require('./routes/users-routes.js');
const authRouter = require('./routes/auth-routes.js');
require('dotenv').config({ path: path.resolve(__dirname, "../.env")})

const app = express();
const PORT = process.env.AUTHPORT || 5000;
const corsOptions = {credentials:true, origin: process.env.URL || '*'}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('/auth/login', (req, res) => {
    res.send(200, "ok");
})

app.get('/auth/token', (req, res) => {
    res.send(200, "ok");
})

app.get('/auth/register', (req, res) => {
    res.send(200, "ok");
})

app.use('/api/users', usersRouter.router);
app.use('/api/auth', authRouter.router);

app.listen(PORT, () => {
    console.log(`🚀 Auth API launched on port ${PORT}`)
});