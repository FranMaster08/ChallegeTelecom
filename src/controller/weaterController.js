const ipservices = require("../service/ip/ipapi");
const {
  getweatherByCity,
  getweatherByCoords,
} = require("../service/weater/currentweater");

const dailyWeaterServices = require("../service/weater/dailyForecast");

const location = async (req, res, next) => {
  try {
    const data = await ipservices.getLocation();
    res.status(200).json({ data: data });
  } catch (error) {
    throw error;
  }
};

const current = async (req, res, next) => {
  const city = req.params.city;
  try {
    let result;
    if (city) {
      result = await getweatherByCity(city);
    } else {
      const location = await ipservices.getLocation();
      result = await getweatherByCoords(location.lat, location.lon);
    }
    res.status(result.cod).json(result);
  } catch (error) {
    res.json(error);
  }
};

const forecast = async (req, res, next) => {
  const city = req.params.city;
  try {
    let result;
    if (city) {
      result = await dailyWeaterServices.getweatherByCity(city);
    } else {
      const location = await ipservices.getLocation();
      result = await dailyWeaterServices.getweatherByCoords(
        location.lat,
        location.lon
      );
    }
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

const home = (req, res, next) => {
  res.status(200).json({ mensaje: `home :` });
};

module.exports = { location, current, forecast, home };
