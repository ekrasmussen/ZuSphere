const express = require('express')
const db = require('../db.js')
const bcrypt = require('bcrypt');
const tokenAuthenticator = require('../middleware/authorization.js');

const router = express.Router();

router.get('/', tokenAuthenticator.authenticateToken, async (req, res) => {
    try{
        const users = await db.pool.query("SELECT * FROM users");
        res.json({users : users.rows});
    } catch(error) {
        res.status(500).json({error:error.message});
    }
})

router.post('/', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = await db.pool.query('INSERT INTO users (username, email, hashedPassword, perms) VALUES ($1, $2, $3, $4) RETURNING *', 
        [req.body.username,req.body.email,hashedPassword,"User"]);
        res.json({user: newUser});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

module.exports = { router };