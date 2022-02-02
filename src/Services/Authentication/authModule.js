const jwt = require("jsonwebtoken");
require('dotenv').config({ path: "src/.env.template"})

const generateToken = (username) => {
	return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "3600s" });
};

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader.split(" ")[1];

	if (!token) return res.sendStatus(401);

	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
		console.log(err);

		if (err) return res.sendStatus(403);

		req.user = user;

		next();
	});
};

module.exports = {
	generateToken,
	authenticateToken,
};
