const usuario = require('../../Database/Models/usuarios');

const registerCustomer = (user, passEnc) => {
  const registeringUser = new usuario();
  registeringUser.username = user;
  registeringUser.passwordEnc = passEnc;
  registeringUser.save();
  return { status: "Usuário criado com sucesso!"}
};

module.exports = { registerCustomer };