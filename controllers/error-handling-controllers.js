exports.handle404Paths = (req, res, next) => {
  res.status(404).send({ msg: "Path Not Found" });
};

exports.handle500Errors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "500 Internal Server Error", err });
};
