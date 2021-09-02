const { currentStrategy, forecastStrategy } = require("../model/strategies");
const serviceWeatherManager = require("../model/serviceWeatherManager");
const ipservices = require("../service/ip/ipapi");

const location = async (req, res, next) => {
  try {
    const data = await ipservices.getLocation();
    return res.status(200).json({ data: data });
  } catch (error) {
    throw error
  }
};

const current = async (req, res, next) => {
  try {
    const city = req.params.city;
    const manager = new serviceWeatherManager();
    manager.setStrategy(new currentStrategy())
    let result = await sendRequest(manager, city);
    return res.status(result.cod).json(result);
  } catch (error) {
    return res.status(error.response.status).json(error.message);
  }
};

const forecast = async (req, res, next) => {
  try {
    const city = req.params.city;
    const manager = new serviceWeatherManager();
    manager.setStrategy(new forecastStrategy())
    let result = await sendRequest(manager, city);
    return res.status(result.cod).json(result);
  } catch (error) {
    return res.status(error.response.status).json(error.message);
  }

};

const sendRequest = async(manager, city) => {
  let result;
  try {
    if (city) result = await manager.getWeatherByCity(city);
    else result = await manager.getWeatherByCoors();
    return result;
  } catch (error) {
    throw error;
  }
};

const home = (req, res, next) => {
  res.status(200).json({ mensaje: `home :` });
};

module.exports = { location, current, forecast, home };
