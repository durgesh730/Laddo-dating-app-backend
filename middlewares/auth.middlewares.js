const jwt = require("jsonwebtoken")
const { JWT_SECRET } = process.env;

module.exports.Auth = (req, res, next) => {
    const token = req.header('token');
    if (!token) res.status(401).send({ error: " Please authenticate using a valid token" })

    const data = jwt.verify(token, JWT_SECRET);
    req.user = data._id;
    next()
}