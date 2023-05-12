const express = require('express');
const db = require('../db.js');
const bcrypt = require('bcrypt');
//const tokens = require('../utils/jwt-helpers.js');

const router = express.Router();

router.post('/login', async (req, res) => {
    try{
        const {username, password} = req.body;

        const users = await db.pool.query('SELECT * FROM users WHERE username = $1 OR email = $1',[req.body.username]);
        if(users.rows.length == 0) return res.status(401).json({error : "Incorrect Username/password"});
        
        //PASSWORD VALIDATION
        const validPassword = await bcrypt.compare(password, users.rows[0].hashedpassword)
        if(!validPassword) return res.status(401).json({error: "Incorrect Username/password"})
        
        //IF VALID, RETURN WEB TOKEN

    } catch(error) {
        res.status(500).json({error:error.message});
    }
})

module.exports = { router };