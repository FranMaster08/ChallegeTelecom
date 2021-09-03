const express = require("express");
const controller = require("../controller");
const routes = express.Router();

routes
  .get("/location", controller.weather.location)
  .get("/current/:city?", controller.weather.current)
  .get("/forecast/:city?", controller.weather.forecast);

module.exports = routes;
