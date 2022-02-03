const { Router } = require('express');

const router = Router();

//Registro de usuario CRUD
router.post('/user', async (req, res) => {
	const { username, password } = req.body;
	const passEnc = cryptoJs.HmacSHA256(password, process.env.SALT);

	const returnReq = await registerCustomer(user, passEnc);
	res.status(201).json(returnReq);
});

module.exports = router;
