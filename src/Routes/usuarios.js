const { Router } = require('express');

const router = Router();

router.get('', (req, res) => {
	res.status(200).json({
		usuario: 'teste',
		nome: 'teste',
		conta: 'teste',
	});
});

router.post('/login', async (req, res) => {
	const { user, password } = req.body;
	const returnReq = await login(user, password);

	res.status(201).send(returnReq);
});

router.post('', (req, res) => {
	const body = req.query;
	res.status(200).json({
		body,
	});
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
