const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Banco', () => {
  console.log("Conectado com sucesso!");
});