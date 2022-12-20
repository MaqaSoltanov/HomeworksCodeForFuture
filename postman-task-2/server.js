let users = [
    {id: 1, name: "Jack", role: "CEO" },
    {id: 2, name: "Mike", role: "Developer" },
    {id: 3, name: "Sam", role: "Worker" }
];

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/user', function (req, res) {
  res.send(users);
});

app.put("/user/:id", function (req, res) {
    const idOfUser = parseInt(req.body.id);
    const userIdx = users.findIndex((user) => user.id === idOfUser);
  
    if (userIdx !== -1) {
      const oldUser = users[userIdx];
      users[userIdx] = { ...oldUser, ...req.body };
      res.json(users[userIdx]);
    } else {
      res.status(404).json();
    }
  });

  app.delete('/user/:id', function (req, res) {
    console.log(req.params.id);
    let idOfUser = parseInt(req.params.id);
    users = users.filter((user) => user.id !== idOfUser);
    res.json(users);
  });


app.listen(3000, () =>
  console.log(`App listening at port 3000`)
);