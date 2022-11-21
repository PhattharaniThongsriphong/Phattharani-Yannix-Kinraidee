const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const users = require('./foodname');

app.get("/", (req, res) => {
    res.send("Welcome!");
});


app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
})

app.listen(port, () => {
    console.log("starting server at port " + port);
});
