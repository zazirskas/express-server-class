const movimentacao = require("../Database/Models/movimentacao");

const checkMovimentacaoType = (movimentacao) => {
	const types = movimentacao.params.tipo;
	switch (types) {
		case "e":
		case "entrada":
			return "entrada";
		case "s":
		case "saida":
		case "saída":
			return "saida";
	}
};

const findMovimentacoesByType = async (type, limit) =>
	movimentacao.find({ type }, { limit });

const createNewMovimentacao = async ({ tipo, valor, date }) => {
	const novaMovimentacao = new movimentacao();
	novaMovimentacao.setBody({ tipo, valor, date });
	return await novaMovimentacao.save();
};

module.exports = {
	checkMovimentacaoType,
	findMovimentacoesByType,
  createNewMovimentacao
};
