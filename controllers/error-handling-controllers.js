exports.handle404Paths = (req, res, next) => {
  res.status(404).send({ msg: "Path Not Found" });
};

exports.handle400Errors = (err, req, res, next) => {
  if (err.status === 400) {
    res.status(400).send({ msg: err.msg });
  } else {
    next(err);
  }
};

exports.handle500Errors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "500 Internal Server Error", err });
};

