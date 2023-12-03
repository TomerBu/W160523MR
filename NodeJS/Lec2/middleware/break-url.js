
const url = require('node:url');

const breakUrl = (req, res) => {
    //movies?title=batman
    const { pathname, query } = url.parse(req.url, true);

    req.url = pathname; //req.url = 'movies'
    req.query = query;  //req.query = {title: 'batman'}

}

module.exports = breakUrl;