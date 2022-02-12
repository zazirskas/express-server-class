const { DB_URL } = require('./../config');

const mongoose = require('mongoose');

mongoose.connect(`${DB_URL}`, () => {
  console.log("Conectado ao banco de dados com sucesso!");
});