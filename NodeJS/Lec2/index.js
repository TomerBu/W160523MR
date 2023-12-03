const { error } = require('console');
const breakUrl = require('./middleware/break-url');
const logger = require('./middleware/logger');
const router = require('./routes/router');
const http = require('http');
const { demoCreateDir, demoCreateFile, demoReadFile } = require('./files');

const server = http.createServer();

server.on('request', breakUrl); // req.url = "/movies"
server.on('request', logger); //  GET /movies
server.on('request', router); // GET /movies

server.listen(8080);

demoReadFile()