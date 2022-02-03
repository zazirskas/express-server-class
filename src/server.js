const express = require('express');
const {
	movimentacaoRouter,
	usuariosRouter,
	registryUserRouter,
	userRouter,
} = require('./Routes');
const server = express();
const logger = require('./Middleware/logger');
const formatResponse = require('./Middleware/formatResponse');
const handleError = require('./Errors/handleError');
const {
	generateToken,
	authenticateToken,
} = require('./Services/Authentication/authModule');
const cryptoJs = require('crypto-js');

server.use(express.json());
server.use(logger);

server.use('/register', registryUserRouter);
server.use('/user', userRouter);

server.get('/error', (req, res) => {
	throw new Error();
});

server.use(authenticateToken);

server.use('/movimentacao', movimentacaoRouter);
server.use('/usuarios', usuariosRouter);

server.use(formatResponse);
server.use(handleError);

server.listen(process.env.PORT, () => {
	console.log(`Ouvindo porta ${process.env.PORT} com sucesso!`);
});
