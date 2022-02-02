const { Router } = require('express');
const req = require('express/lib/request');
const { checkMovimentacaoType, findMovimentacoesByType, createNewMovimentacao } = require('../Services/movimentacoes');
const movimentacao = require('../Database/Models/movimentacao');

const router = Router();

router.get("/:tipo", async (req, res, next) => {
	const type = checkMovimentacaoType(req);
	const limit = Number(req.query.limit) || 0;

  res.body = await findMovimentacoesByType(type, limit);

	next();
});

router.post("/", async (req, res, next) => {
	const body = req.query

  res.body = await createNewMovimentacao(body);

	next();
});

router.delete("", async (req, res, next) => {
	const body = req.query
	await movimentacao.findOneAndDelete(body);
	res
		.status(410)
		.json({ mensagem: "Excluido com sucesso" });
});

router.put("", (req, res) => {
	const body = req.query
	res
		.status(200)
		.json({ mensagem: "atualizado com sucesso",  body});
});

module.exports = router;