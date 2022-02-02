const express = require("express");
const { movimentacaoRouter, usuariosRouter } = require('./Routes');
const server = express();
const logger = require('./Middleware/logger');
const handleError = require("./Errors/handleError");
const formatResponse = require('./Middleware/formatResponse')
const { generateToken, authenticateToken } = require("./Services/Authentication/authModule");
const cryptoJs = require('crypto-js');
const usuario = require('./Database/Models/usuarios');

server.use(express.json());
server.use(logger);

server.post('/register', (req, res) => {
	const username = req.query.username;
	const passEnc = cryptoJs.HmacSHA256(req.query.password, process.env.SALT);
	const newUser = new usuario();
	newUser.username = username;
	newUser.passwordEnc = passEnc;
	newUser.save();

	const token = generateToken({ role: "user" });
	res.status(200).json(token);
});

server.get("/error", (req, res) => {
	throw new Error();
})

server.use(authenticateToken);

server.use('/movimentacao', movimentacaoRouter);
server.use('/usuarios', usuariosRouter);

server.use(formatResponse);
server.use(handleError);

server.listen(process.env.PORT, () => {
	console.log(`Ouvindo porta ${process.env.PORT} com sucesso!`);
});
