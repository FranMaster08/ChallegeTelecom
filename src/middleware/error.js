const ErrorHandler = (err, req, res, next) => {
  let { status, statusText, data } = err.response;
  res.status(status).json({ status, statusText, data });
};

module.exports = ErrorHandler;
