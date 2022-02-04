const jwt = require("jsonwebtoken");
const usuario = require("../../Database/Models/usuarios");
const cryptoJs = require("crypto-js");
require("dotenv").config({ path: "src/.env.template" });

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

const login = async (username, password) => {
	try {
		const foundUsername = await usuario.findOne({ 
			username: username
		});
		if (!foundUsername) throw Error("Usuário não encontrado!");

		const foundPassEnc = await usuario.findOne({
			passwordEnc: cryptoJs.HmacSHA256(password, process.env.SALT),
		});

		if (!foundPassEnc) throw Error("Senha não confere!");
		return {
			status: "ok",
			token: generateToken({ role: "user"}),
		}
	} catch (err) {
		return err;
	}
};

module.exports = {
	generateToken,
	authenticateToken,
	login,
};
