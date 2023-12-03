const logger = (req, res) => {
    console.log(req.url);
    console.log(req.method);
}

module.exports = logger;