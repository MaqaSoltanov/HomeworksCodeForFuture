let goods = [
    { id: 1, name: 'good 1', price: 13, count: 5 },
    { id: 2, name: 'good 2', price: 34, count: 3 },
    { id: 3, name: 'good 3', price: 20, count: 52 },
    { id: 4, name: 'good 5', price: 350, count: 12 },
    { id: 5, name: 'good 4', price: 40, count: 25 },
    { id: 6, name: 'good 6', price: 113, count: 51 },
    { id: 7, name: 'good 7', price: 324, count: 32 },
    { id: 8, name: 'good 12', price: 220, count: 53 },
    { id: 9, name: 'good 9', price: 356, count: 2 },
    { id: 10, name: 'good 8', price: 540, count: 23 }
]

const express = require('express');
const app = express();

app.get('/good/:id', function (req, res) {
    console.log("REQ")
    console.log(req.params.id);
    const good = (goods.find((good) => good.id == req.params.id));

    if (!good)
        res.status(404).send();

    res.json(good);
});

app.get('/good', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    console.log(count)
    console.log(offset)
    res.send({ goods: goods.slice(offset, offset + count) });
});


app.listen(3001, function () {
    console.log("App is listening for queries");
})