const dataArr = [];
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');

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


fs.readFile('./data.json', 'utf8', (err, data) => {
    const jsonData = JSON.parse(data);
    dataArr.push(...jsonData);
    console.log(data);
    addToDataBase();
});

function addToDataBase() {
    for (let i = 0; i < dataArr.length; i++) {
        let { description, due, employee, finished } = dataArr[i];

        if(due == undefined)
            due = null;
        if(employee == undefined)
            employee = null;
        if(finished == undefined)
            finished = null;
        

        connection.query(`INSERT INTO tasks (task_description, due_date, employee, finished_date)
        VALUES ('${description}', '${due}', '${employee}', '${finished}');`,
            (err, data) => {
                if (err) console.log(err)
            })
    }
}
