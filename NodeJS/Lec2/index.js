const breakUrl = require('./middleware/break-url');
const logger = require('./middleware/logger');
const router = require('./routes/router');
const http = require('http');

const server = http.createServer();

server.on('request', breakUrl);
server.on('request', logger);
server.on('request', router);

server.listen(8080);