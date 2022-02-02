const moment = require("moment");
const mongoose = require("mongoose");

const movimentacaoSchema = new mongoose.Schema(
	{
		tipo: String,
		valor: Number,
		date: Date,
	},
	{ versionKey: false }
);

movimentacaoSchema.methods.setBody = function ({ tipo, valor, date }) {
  this.tipo = tipo;
	this.valor = valor;
  
	if (typeof date === "string") {
    this.date = moment(date, "DD/MM/YYYY").toDate();
	} else {
    this.date = date;
	}
};

const movimentacao = mongoose.model("movimentacoes", movimentacaoSchema);

module.exports = movimentacao;
