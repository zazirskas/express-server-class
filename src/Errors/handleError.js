const handleError = (err, req, res, next) => {
  if (err instanceof Error) {
    res.status(500).send("Erro, verifique sua solicitação");
  };
  
  res.status(200);

  next(err);
};

module.exports = handleError;