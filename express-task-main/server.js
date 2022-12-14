let users = [
    {id: 1, name: "Musa", age: "23"},
    {id: 2, name: "Agil", age: "54"},
    {id: 3, name: "Jack", age: "40"}
]

const express = require('express');
const app = express();  

app.get('/', function (req, res) {
    res.send(users);
  });


app.listen(3000, function(){
    console.log("App is listening for queries");
})