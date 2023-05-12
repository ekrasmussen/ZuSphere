const pg = require('pg');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, "../.env")})

const {Pool} = pg;

let localPoolConfig = {
    user:'postgres',
    password: process.env.dbPass,
    host:'localhost',
    port:'5432',
    database:'auth'
};

const pool = new Pool(localPoolConfig);

module.exports = {pool}