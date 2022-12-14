let cards = [
    {id: 1, number: "2323232340404040"},
    {id: 2, number: "5454545440404040"},
    {id: 3, number: "4040404040404040"},
    {id: 4, number: "4040403030303030"},
    {id: 5, number: "3030304040404040"}
]

const express = require('express');
const app = express();  

app.get('/card/:id', function (req, res) {
    console.log("REQ")
    console.log(req.params.id);
    res.send((cards.find((card) => card.id == req.params.id)));
  });

app.get('/card', function (req, res) {
    console.log("REQ")
    console.log(req.params.id);
    res.send(JSON.stringify(cards));
  });


app.listen(3001, function(){
    console.log("App is listening for queries");
})