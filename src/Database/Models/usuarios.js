const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema(
	{
		username: String,
		passwordEnc: String,
	},
	{ versionKey: false }
);

const usuario = mongoose.model("usuarios", usuariosSchema);

module.exports = usuario;