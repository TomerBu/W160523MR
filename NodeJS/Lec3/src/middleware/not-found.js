// The last middleware in the chain:
const notFound = (req, res, next) => {
    res.status(404).json({ message: "Not Found" })
}

export { notFound };