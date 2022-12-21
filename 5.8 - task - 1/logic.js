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
    updateFinishDates();
    deleteFunction();
});


fs.readFile('./data.json', 'utf8', (err, data) => {
    const jsonData = JSON.parse(data);
    dataArr.push(...jsonData);
    console.log(data);
    // addToDataBase();
});

function addToDataBase() {
    // for (let i = 0; i < dataArr.length; i++) {
    //     let { description, due, employee, finished } = dataArr[i];

    //     if(due == undefined)
    //         due = "IS NULL";
    //     if(employee == undefined)
    //         employee = "IS NULL";
    //     if(finished == undefined)
    //         finished = "IS NULL";   

    //     connection.query(`INSERT INTO tasks (task_description, due_date, employee, finished_date)
    //     VALUES ('${description}', '${due}', '${employee}', '${finished}');`,
    //         (err, data) => {
    //             if (err) console.log(err)
    //         })
}

function updateFinishDates() {
    let currentDate = '2022-12-21';
    console.log(currentDate);
    connection.query(`UPDATE tasks SET due_date = '${currentDate}' WHERE due_date = 'IS NULL';`, (err, data) => {
        if (!err) {
            console.log(data);
        }

        console.log(err);
    });
}

function deleteFunction() {
    connection.query(`DELETE FROM tasks
    WHERE due_date < finished_date;`
    ,(err,data) => {
        console.log("DATA");
        console.log(data);
    }
)
}

