//this file sends it to sql

const fs = require('fs');
require('dotenv').config();

const sql = fs.readFileSync('setup.sql').toString();


const db = require('./db');

db.query(sql)
.then(data => console.log('Set-up complete'))
.catch(error => console.log(error));
