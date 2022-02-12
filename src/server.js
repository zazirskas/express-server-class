const express = require("express");
const {
	movimentacaoRouter,
	usuariosRouter,
	registryUserRouter,
	userRouter,
	uploadRouter,
} = require("./Routes");
const server = express();
const fileUpload = require("express-fileupload");
const logger = require("./Middleware/logger");
const formatResponse = require("./Middleware/formatResponse");
const handleError = require("./Errors/handleError");
const {
	authenticateToken,
} = require("./Services/Authentication/authModule");

server.use(express.json());
server.use(logger);
server.use(fileUpload());

server.use("/register", registryUserRouter);
server.use("/user", userRouter);

server.use(authenticateToken);

server.use("/upload", uploadRouter);
server.use('/arquivos', express.static('src/public'));
server.use("/movimentacao", movimentacaoRouter);
server.use("/usuarios", usuariosRouter);

server.use(formatResponse);
server.use(handleError);

server.listen(process.env.PORT, () => {
	console.log(`Ouvindo porta ${process.env.PORT} com sucesso!`);
});
