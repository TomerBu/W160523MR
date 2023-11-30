const router = (req, res) => {
    if (req.url === '/home') {
        return res.end("Home");
    }
    if (req.url === '/about') {
        return res.end("about");
    }
    if (req.url === '/movies') {
        return res.end("movies");
    }
    res.end("Not Found");
}

module.exports = router;