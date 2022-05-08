const notFound = (req, res) => res.status(404).send("Route have not exist");

module.exports = notFound;
