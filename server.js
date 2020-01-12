const express = require('express');
const mysql = require('mysql');
const PORT = 4001;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen('4001', () => {
    console.log('Server started on PORT:'+PORT)
});
//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database: 'adminlogin'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected to database!')
});

//add new student
app.post('/login', function (req,res) {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
   
        let sql = `SELECT username, password FROM loginasadmin WHERE username = "${username}" AND password = "${password}"`;
        db.query(sql, function (err) {
            if (err){
                res.status(400).send("Error, record not found!");
                throw err;
            } 
            console.log("record found!");
});
});
