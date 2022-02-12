const { Router } = require('express');
const { login } = require('./../Services/Authentication/authModule');

const router = Router();
 
router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	const returnReq = await login(username, password);

	res.status(200).send(returnReq);
});

router.delete('', (req, res) => {
	const body = req.query;
	res.status(200).send('Item deletado com sucesso!');
});

router.put('', (req, res) => {
	const body = req.query;
	res.status(200).json({
		mensagem: 'item atualizado com sucesso',
		body,
	});
});

module.exports = router;
