// http is a built in module - dont need to npm i 
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello, Built in modules");
});

server.listen(8080);