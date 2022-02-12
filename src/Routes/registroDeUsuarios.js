const { Router } = require('express');
const { registerCustomer } = require("./../Services/DataBaseConsumption/userRegistry");
const cryptoJs = require("crypto-js");
require("dotenv").config({ path: "src/.env.template" });

const router = Router();

//Registro de usuario CRUD
router.post('/user', async (req, res) => {
	const { username, password } = req.body;
	const passEnc = cryptoJs.HmacSHA256(password, process.env.SALT).toString();

	const returnReq = await registerCustomer(username, passEnc);
	res.status(201).json(returnReq);
});

module.exports = router;
