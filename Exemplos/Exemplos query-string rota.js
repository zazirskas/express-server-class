// Movimentacoes por body normal
// server.get("/movimentacao", (req, res) => {
// 	res
//     .status(200)
//     .json({
// 			"id":"1",
// 			"tipo":"Compra",
// 			"valor":"1000",
// 			"data":"14/01/2022"
// 	});
// });

// server.post("/movimentacao", (req, res) => {
// 	const body = req.body
// 	res
//     .status(201)
//     .json({
// 			mensagem: "incluído com sucesso",
// 			body: body
// 		});
// });

// server.delete("/movimentacao", (req, res) => {
// 	res
// 		.status(410)
// 		.json({ mensagem: "Excluido com sucesso" });
// });

// server.put("/movimentacao", (req, res) => {
// 	const body = req.body
// 	res
// 		.status(200)
// 		.json({ mensagem: "atualizado com sucesso",  body});
// });

// Movimentacoes por params
// server.get("/movimentacao", (req, res) => {
// 	res
//     .status(200)
//     .json({
// 			"id":"1",
// 			"tipo":"Compra",
// 			"valor":"1000",
// 			"data":"14/01/2022"
// 	});
// });

// server.post("/movimentacao/:id/:tipo/:valor/:data", (req, res) => {
// 	const body = req.params
// 	res
//     .status(201)
//     .json({
// 			mensagem: "incluído com sucesso",
// 			body: body
// 		});
// });

// server.delete("/movimentacao", (req, res) => {
// 	res
// 		.status(410)
// 		.json({ mensagem: "Excluido com sucesso" });
// });

// server.put("/movimentacao/:id/:tipo/:valor/:data", (req, res) => {
// 	const body = req.params
// 	res
// 		.status(200)
// 		.json({ mensagem: "atualizado com sucesso",  body});
// });

// Movimentacoes com query string
// server.get("/movimentacao", (req, res) => {
// 	res
//     .status(200)
//     .json({
// 			"id":"1",
// 			"tipo":"Compra",
// 			"valor":"1000",
// 			"data":"14/01/2022"
// 	});
// });

// server.post("/movimentacao", (req, res) => {
// 	const body = req.query
// 	res
//     .status(201)
//     .json({
// 			mensagem: "incluído com sucesso",
// 			body: body
// 		});
// });

// server.delete("/movimentacao", (req, res) => {
// 	res
// 		.status(410)
// 		.json({ mensagem: "Excluido com sucesso" });
// });

// server.put("/movimentacao", (req, res) => {
// 	const body = req.query
// 	res
// 		.status(200)
// 		.json({ mensagem: "atualizado com sucesso",  body});
// });