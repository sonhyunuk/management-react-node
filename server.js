const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port, 
    database : conf.database
});
connection.connect();


app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err,rows,field) =>{
            res.send(rows)
        }
    )
});

app.listen(port, () => console.log('listing'));