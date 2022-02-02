const formatResponse = (req, res, next) => {
	const responseObj = {
		message: "ok",
		item: res.body,
	};

	res.status(200).send(responseObj);
};

module.exports =  formatResponse;