const express = require('express');

const app = express();

// configure express to handle incoming JSON body
app.use(express.json());


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

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);

    res.json({ 'message': `User saved` , 'user': user})
})

//     /search?firstName=dave
app.get("/search", (req, res) => {

    const { firstName } = req.query;

    return res.json(
        users.filter(
            user => user.firstName.toLocaleLowerCase() === firstName.toLocaleLowerCase()
        )
    )
});



app.listen(5500);



