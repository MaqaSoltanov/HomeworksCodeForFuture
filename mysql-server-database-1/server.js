const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'maqa2003',
    database: 'archive'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/task', function (req, res) {
    connection.query('SELECT * FROM archive.tasks;', 
  (err, data) => {
    if (err) return res.status(500);
    res.json(data);
})});

app.get('/task/:id', function (req, res) {
    connection.query(`SELECT FROM archive.tasks WHERE id = ${req.params.id};`, 
  (err, data) => {
    if (err) return res.status(500);
    res.json(data);
})});




app.listen(3000, function () {
    console.log("App is listening for queries");
})