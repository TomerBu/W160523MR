const fs = require('fs');
const router = (req, res) => {
    if (req.url === '/home') {
        return res.end("Home");
    }
    if (req.url === '/about') {
        return res.end("about");
    }
    if (req.url === '/movies') {

        fs.readFile("public/movies.html", (err, data) => {
            res.end(data);
        })
        return
    }
    res.end("Not Found");
}

module.exports = router;