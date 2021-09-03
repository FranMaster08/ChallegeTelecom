const errorHandler = require('./error')
const routes = require("../routes/index.routes");
const config = require("config");
const compression = require("compression");
// Api rest compression response from configuration.
const useCompress = config.get("compression");
// Compression middleware.

const shouldCompress = (req) =>
  !!((req.headers && req.headers["x-no-compression"]) || useCompress === false);



const applyMidleware = (app) => {
  // Compression.
  app.use(compression({ filter: shouldCompress, threshold: 0 }));
  //  app with server routes.
  app.use("/", routes);
  app.use(errorHandler)
  app.set('trust proxy', true);
};

module.exports = {
  applyMidleware,
};
