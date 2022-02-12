const { Router } = require('express');
const aws = require('aws-sdk');

const router = Router();

router.post("/upload", (req, res) => {
	const files = req.files.uploaded_file;
	let savePath = __dirname + "/Public/" + files.name;
	let accessPath = "localhost:3000/arquivos/" + files.name;
	files.mv(savePath, (err) => {
		if (err) return res.status(500).send(err);
		
		res.status(200).send({
			message: "Arquivo salvo com suceso",
			path: accessPath,
		});
	});
});

module.exports = router;