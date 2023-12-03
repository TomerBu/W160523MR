
const url = require('node:url');

const breakUrl = (req, res) => {
    //req.url = /movies?title=batman
    const result = url.parse(req.url, true)


    console.dir(result.query);
    console.dir(result.pathname);
}

module.exports = breakUrl;