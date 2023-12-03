const express = require('express');

const app = express();

const users = [{
    firstName: "John",
    lastName: "doe"
},
{
    firstName: "Jane",
    lastName: "doe"
}]

app.get('/users', (req, res) => {
    // res.end(JSON.stringify(users));
    res.json(users);
});

app.listen(5500);