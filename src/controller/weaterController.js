const iputils = require("../utils/iputils");
const { currentStrategy, forecastStrategy } = require("../model/strategies");
const serviceWeatherManager = require("../model/serviceWeatherManager");
const ipservices = require("../service/ip/ipapi");

const location = async (req, res, next) => {
  try {
    const ip = iputils(req);
    const data = await ipservices.getLocation(ip);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const current = async (req, res, next) => {
  try {
    const city = req.params.city;
    const manager = new serviceWeatherManager();
    manager.setStrategy(new currentStrategy());
    let result = await sendRequest(manager, city, req);
    return res.status(result.cod).json(result);
  } catch (error) {
    next(error);
  }
};

const forecast = async (req, res, next) => {
  try {
    const city = req.params.city;
    const manager = new serviceWeatherManager();
    manager.setStrategy(new forecastStrategy());
    let result = await sendRequest(manager, city, req);
    return res.status(result.cod).json(result);
  } catch (error) {
    next(error);
  }
};

const sendRequest = async (manager, city, req) => {
  let result;
  if (city) result = await manager.getWeatherByCity(city);
  else result = await manager.getWeatherByCoors(iputils(req));
  return result;
};

const home = (req, res, next) => {
  res.status(200).json({ mensaje: `home :` });
};

module.exports = { location, current, forecast, home };
