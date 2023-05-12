const express = require('express');
const path = require('path');
const cors = require('cors'); 
const cookieParser = require('cookie-parser')

require('dotenv').config({ path: path.resolve(__dirname, "../.env")})

const app = express();
const PORT = process.env.AUTHPORT || 5000;
const corsOptions = {credentials:true, origin: process.env.URL || '*'}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('/login', (req, res) => {
    res.send(200, "ok");
})

app.get('/token', (req, res) => {
    res.send(200, "ok");
})

app.get('register', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`🚀 Auth API launched on port ${PORT}`)
});